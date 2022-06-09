import { errorHandler } from "../../../utils/error.js";
import * as fs from "fs";

export const removeFile = async (filePath) => {
    await fs.unlink(filePath, (err) => {
        if (err) errorHandler(err);
    });
}
