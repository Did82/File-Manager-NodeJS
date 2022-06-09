import { cli } from "./cli/index.js";
import { state } from "./utils/state.js";

await cli();

process.on('beforeExit', () => {
    console.log(`\nThank you for using File Manager, ${state.username}!`);
    }
);
