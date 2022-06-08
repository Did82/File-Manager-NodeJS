import { state } from "../../../utils/state.js";

export const cd = async (path) => {
    process.chdir(path);
    state.currentDirectory = process.cwd();
    console.log(`Current directory: ${state.currentDirectory}`);
}
