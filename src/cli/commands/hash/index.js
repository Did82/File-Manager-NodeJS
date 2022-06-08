import { createReadStream } from "fs";
const { createHash } = await import('crypto');

export const calculateHash = async (file) => {
    const hash = createHash('sha256');
    const fileStream = createReadStream(file);
    fileStream.on('data', ( data ) => {
        hash.update(data);
    });
    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
    fileStream.on('error', ( err ) => {
        throw new Error(`FS operation failed: ${err}`);
    });
};
