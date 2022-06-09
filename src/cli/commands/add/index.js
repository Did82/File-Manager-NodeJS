import * as fs from "fs";
import { errorHandler } from "../../../utils/error.js";

export const createFile = async (filename) => {
    const file = await fs.createWriteStream(filename);
    file.write('', 'utf8', (err) => {
        err && errorHandler(err);
    });
    file.end();
};

