import path from "node:path";

const startFunc = ({ inFolderPath, targetGems }) => {
    return targetGems.map(gem => path.join(inFolderPath, gem));
};

export default startFunc;
