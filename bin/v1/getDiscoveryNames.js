import path from "node:path";

const startFunc = ({ discovery }) => {
    return {
        itemName: path.basename(discovery),
        parentFolderName: path.basename(path.dirname(discovery)).toLowerCase()
    };
};

export default startFunc;
