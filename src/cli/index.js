import * as readline from "readline";
import { greetings } from "./greetings.js";
import { commands } from "./comands/index.js";

export const cli = () => {
    greetings();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", ( line ) => {
            try {
                commands(rl, line);
            } catch (err) {
                console.log('Operation failed', err);
            }
        }
    );
}
