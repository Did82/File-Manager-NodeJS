import * as readline from "readline";
import { greetings } from "./greetings.js";

export const cli = () => {
    greetings();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter command: ", ( command ) => {
            switch (command) {
                case ".exit":
                    rl.close();
                    break;
                case "help":
                    console.log("Available commands: exit, help");
                    break;
                default:
                    console.log(`Unknown command: ${command}`);
                    break;

            }

        }
    );
}
