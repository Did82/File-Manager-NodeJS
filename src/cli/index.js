import * as readline from "readline";
import { greetings } from "./greetings.js";
import { commands } from "./commands/index.js";

export const cli = async () => {
    greetings();

    const rl = await readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", async ( line ) => {
            await commands(rl, line);
        }
    );
}
