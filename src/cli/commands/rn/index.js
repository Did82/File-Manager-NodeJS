import { errorHandler } from "../../../utils/error.js";
import * as fs from "fs";
import * as path from "path";

export const renameFile = async (oldPath, newName) => {
    const newPath = path.join(path.dirname(oldPath), newName);
    await fs.rename(oldPath, newPath, (err) => {
        if (err) errorHandler(err);
    });
}
