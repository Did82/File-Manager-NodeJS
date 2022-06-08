import os from "os";

export const osInfo = async ( arg ) => {
    switch (arg) {
        case '--cpus':
            console.log(os.cpus());
            break;
        case '--EOL':
            console.log(os.EOL);
            break;
        case '--homedir':
            console.log(os.homedir());
            break;
        case '--architecture':
            console.log(os.arch());
            break;
        default:
            console.log(os.platform());
    }
}
