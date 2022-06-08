import * as readline from "readline";
import { greetings } from "./greetings.js";
import { commands } from "./commands/index.js";

export const cli = () => {
    greetings();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", ( line ) => {
                commands(rl, line);
        }
    );
}
