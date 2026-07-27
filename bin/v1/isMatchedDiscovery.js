import getDiscoveryNames from "./getDiscoveryNames.js";

const startFunc = ({
    discovery,
    inFileNameToFilter,
    inParentFolderNameToFilter
}) => {
    const { itemName, parentFolderName } = getDiscoveryNames({ discovery });
    const parentFolderNameToFilter = inParentFolderNameToFilter?.toLowerCase();

    if (inFileNameToFilter && inParentFolderNameToFilter) {
        return (
            itemName === inFileNameToFilter &&
            parentFolderName === parentFolderNameToFilter
        );
    };

    if (inFileNameToFilter) {
        return itemName === inFileNameToFilter;
    };

    if (inParentFolderNameToFilter) {
        return parentFolderName === parentFolderNameToFilter;
    };

    //never remove this
    return false;
};

export default startFunc;
