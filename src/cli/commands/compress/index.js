import * as fs from "fs";
import * as zlib from "zlib";

export const zip = async (fileSource, fileDestination, action) => {
    const fileStream = fs.createReadStream(fileSource);
    const archiveStream = fs.createWriteStream(fileDestination);
    const gzip = zlib.createGzip();
    const unzip = zlib.createGunzip();
    action === "compress"
        ? fileStream.pipe(gzip).pipe(archiveStream)
        : fileStream.pipe(unzip).pipe(archiveStream);
};
