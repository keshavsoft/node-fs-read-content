import fromRootIndex from "../../index.js";

const allJsonData = fromRootIndex({
    folderPath: process.cwd(),
    fileNameToFilter: "end-points.js"
});

console.log(allJsonData);