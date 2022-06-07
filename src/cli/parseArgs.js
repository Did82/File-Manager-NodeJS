export const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = {};
    args.forEach(arg => {
        const [key, value] = arg.slice(2).split("=");
        parsedArgs[key] = value;
    })

    return parsedArgs.username || "Unknown user";
}
