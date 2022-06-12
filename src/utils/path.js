import * as path from "path";

export const getAbsolutePath = ( filePath, filename ) => {
    const __dirname = path.dirname(filePath);
    return path.join(__dirname, 'files', filename);
}
