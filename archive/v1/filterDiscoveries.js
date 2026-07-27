import isMatchedDiscovery from "./isMatchedDiscovery.js";

const startFunc = ({
    allDiscoveries,
    inFileNameToFilter,
    inParentFolderNameToFilter
}) => {
    return allDiscoveries.filter(discovery => {
        return isMatchedDiscovery({
            discovery,
            inFileNameToFilter,
            inParentFolderNameToFilter
        });
    });
};

export default startFunc;
