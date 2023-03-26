import { parseArgs } from "./parseArgs.js";
import { state } from "../utils/state.js";

export const greetings = () => {
    const username = parseArgs();
    if (username) state.username = username;

    console.log(`Welcome to the File Manager, ${state.username}!`);
    process.chdir(state.homedir);
    state.currentDirectory = process.cwd();
    console.log(`You are currently in ${state.currentDirectory}`);
}
