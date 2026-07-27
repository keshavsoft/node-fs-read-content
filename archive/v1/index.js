import announceInputs from "./announceInputs.js";
import readDiscoveries from "./readDiscoveries.js";
import filterDiscoveries from "./filterDiscoveries.js";
import buildFullPaths from "./buildFullPaths.js";

const startFunc = ({
    inFolderPath,
    inFileNameToFilter,
    inParentFolderNameToFilter,
    annouce = false
}) => {
    announceInputs({
        inFolderPath,
        inFileNameToFilter,
        inParentFolderNameToFilter,
        annouce
    });

    const allDiscoveries = readDiscoveries({ inFolderPath });

    const targetGems = filterDiscoveries({
        allDiscoveries,
        inFileNameToFilter,
        inParentFolderNameToFilter
    });

    return buildFullPaths({ inFolderPath, targetGems });
};

export default startFunc;
