import * as os from "os";
import { parseArgs } from "./parseArgs.js";

export const greetings = () => {
    const username = parseArgs();
    const __dirname = os.homedir();

    console.log(`Welcome to the File Manager, ${username}!`);
    process.chdir(__dirname);
    console.log(`Current directory: ${process.cwd()}`);
}
