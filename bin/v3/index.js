import fs from "fs";
import path from "node:path";

const startFunc = ({
    inFilePaths
}) => {

    const filesWithContent = inFilePaths.map(element => {

        const fileContent = fs.readFileSync(element, 'utf8');

        return {
            nameWithOutExtension: path.basename(element, path.extname(element)),
            extension: path.extname(element),
            basename: path.basename(element),
            fileFullPath: element,
            fileContent
        };
    });

    return filesWithContent;
};

export default startFunc;
