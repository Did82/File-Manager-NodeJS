import { state } from "../../utils/state.js";
import { ls } from "./ls/index.js";
import os from "os";
import { cd } from "./cd/index.js";
import { errorHandler } from "../../utils/error.js";
import { osInfo } from "./os/index.js";
import { calculateHash } from "./hash/index.js";
import { cat } from "./cat/index.js";
import { createFile } from "./add/index.js";
import { renameFile } from "./rn/index.js";

export const commands = async ( rl, line ) => {
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
            cd(args[0]).catch(errorHandler);
            break;
        case "up":
            cd('..').catch(errorHandler);
            break;
        case "cp":
            console.log("Copying files...");
            break;
        case "mv":
            console.log("Moving files...");
            break;
        case "rn":
            await renameFile(args[0], args[1]);
            break;
        case "add":
            await createFile(args[0]);
            break;
        case "hash":
            calculateHash(args[0]).catch(errorHandler);
            break;
        case "cat":
            await cat(args[0]);
            break;
        case "os":
            osInfo(args[0]).catch(errorHandler);
            break;
        default:
            console.log("Invalid input");
    }
}
