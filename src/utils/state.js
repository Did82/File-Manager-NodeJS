import * as os from "os";

export const state = {
    homedir: os.homedir(),
    currentDirectory: process.cwd(),
    username: os.userInfo().username,
}
