import fs from "fs";

const startFunc = ({
    inFilePaths
}) => {

    const filesWithContent = inFilePaths.map(element => {

        const fileContent = fs.readFileSync(element, 'utf8');

        return {
            fileFullPath: element,
            fileContent
        };
    });

    return filesWithContent;
};

export default startFunc;
