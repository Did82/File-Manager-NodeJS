import * as fs from "fs";
import { errorHandler } from "../../../utils/error.js";

export const copyFile = async ( source, destination ) => {
    const fileName = source.split("/").pop();
    const fullPathToDestination = `${destination}/${fileName}`;
    const file = await fs.createReadStream(source);
    const fileToWrite = await fs.createWriteStream(fullPathToDestination);
    file.on("error", ( err ) => {
        errorHandler(err);
    }
    );
    fileToWrite.on("error", ( err ) => {
        errorHandler(err);
    }
    );
    file.pipe(fileToWrite);
}
