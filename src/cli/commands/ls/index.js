import * as fs from "fs";
import { errorHandler } from "../../../utils/error.js";

export const ls = async (path) => {
    await fs.readdir(path,( err, files ) => {
        if (err) errorHandler(err);
        console.log(files);
    });
};
