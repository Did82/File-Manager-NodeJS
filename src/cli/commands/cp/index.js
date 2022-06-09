import * as fs from "fs";
import { errorHandler } from "../../../utils/error.js";

export const copyFile = async ( source, destination ) => {
    const fileName = source.split("/").pop();
    const fullPathToDestination = `${destination}/${fileName}`;
    await fs.copyFile(source, fullPathToDestination, ( err ) => {
            if (err) errorHandler(err);
        }
    );
}
