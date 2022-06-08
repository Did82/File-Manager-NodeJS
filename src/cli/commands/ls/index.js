import * as fs from "fs";

export const ls = async (path) => {
    await fs.readdir(path,( err, files ) => {
        if (err) throw new Error("Operation failed");
        console.log(files);
    });
};
