import fs from "node:fs";

const startFunc = ({ inFolderPath }) => {
    return fs.readdirSync(inFolderPath, { recursive: true });
};

export default startFunc;
