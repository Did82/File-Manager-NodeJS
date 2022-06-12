import * as fs from "fs";
import * as zlib from "zlib";
import { errorHandler } from "../../../utils/error.js";

export const zip = async ( fileSource, fileDestination, action ) => {
    const fileStream = fs.createReadStream(fileSource);
    const archiveStream = fs.createWriteStream(fileDestination);
    const zip = zlib.createBrotliCompress();
    const unzip = zlib.createBrotliDecompress();

    fileStream.on("error", ( err ) => {
            errorHandler(err);
        }
    );

    zip.on("error", ( err ) => {
            errorHandler(err);
        }
    );

    unzip.on("error", ( err ) => {
            errorHandler(err);
        }
    );

    archiveStream.on("error", ( err ) => {
            errorHandler(err);
        }
    );

    action === "compress"
        ? fileStream.pipe(zip).pipe(archiveStream)
        : fileStream.pipe(unzip).pipe(archiveStream);
};


