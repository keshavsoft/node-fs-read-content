const startFunc = ({
    inFolderPath,
    inFileNameToFilter,
    inParentFolderNameToFilter,
    annouce = false
}) => {
    if (annouce) console.log("inputs : ", inFolderPath, inFileNameToFilter, inParentFolderNameToFilter);
};

export default startFunc;
