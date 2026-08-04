import path from 'path';
import fsRecursive from 'node-fs-recursive';

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "api");

import defaultFunc from '../../index.js';

const files = fsRecursive({
    folderPath: appJsPath,
    fileNameToFilter: "end-points.js"
})

const k1 = defaultFunc({
    filePaths: files
});

// console.log("ssssssssss : ", k1);
console.log("ssssssssss : ", k1[0]);
