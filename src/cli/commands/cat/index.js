import * as fs from "fs";
import { errorHandler } from "../../../utils/error.js";

export const cat = async ( filePath ) => {
    const file = await fs.createReadStream(filePath);
    let data = "";
    file.on("data", ( chunk ) => {
            data += chunk;
        }
    );
    file.on("end", () => {
            console.log(data);
        }
    );
    file.on("error", ( err ) => {
            errorHandler(err);
        }
    );
};

