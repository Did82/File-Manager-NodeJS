import { state } from "../../utils/state.js";
import { ls } from "./ls/index.js";
import os from "os";
import { cd } from "./cd/index.js";

export const commands = ( rl, line ) => {
    const [command, ...args] = line.split(" ");
    switch (command) {
        case ".exit":
            console.log(`Thank you for using File Manager, ${state.username}!`)
            rl.close();
            break;
        case "help":
            console.log("Available commands: .exit, up, ls, cd, cp, mv, rn, rm, add, cat, os");
            break;
        case "ls":
            console.log(ls(state.currentDirectory));
            break;
        case "cd":
            console.log("Changing directory...");
            break;
        case "up":
            cd('..')
                .catch(err => {
                    throw new Error("Operation failed")
                });
            break;
        case "cp":
            console.log("Copying files...");
            break;
        case "mv":
            console.log("Moving files...");
            break;
        case "rm":
            console.log("Removing files...");
            break;
        case "mkdir":
            console.log("Creating directory...");
            break;
        case "touch":
            console.log("Creating file...");
            break;
        case "cat":
            console.log("Printing file content...");
            break;
        case "os":
            console.log("Printing file content...", args, os.cpus());
            break;
        default:
            console.log("Invalid input");
    }
}
