import fs from "fs";
import path from "node:path";

import fileNamesJson from './fileNames.json' with {type: 'json'};

const startFunc = ({
    inFilePaths
}) => {

    const filesWithContent = inFilePaths.map(element => {
        let fileType;

        const fileContent = fs.readFileSync(element, 'utf8');

        const basename = path.basename(element);

        for (const [key, value] of Object.entries(fileNamesJson)) {
            if (value?.fileName === basename) {
                fileType = key;
            };
        };

        return {
            fileType,
            nameWithOutExtension: path.basename(element, path.extname(element)),
            extension: path.extname(element),
            basename,
            fileFullPath: element,
            fileContent
        };
    });

    return filesWithContent;
};

export default startFunc;
