window.merge = (arg1, arg2) => {
    if (arg1 === null || arg1 === undefined || arg2 === null || arg2 === undefined) {
        throw Error("Cannot convert undefined or null to object");
    }
    const result = Object({});
    [arg1, arg2].forEach(arg => {
        for (const nextKey in arg) {
            if (arg.hasOwnProperty(nextKey)) {
                result[nextKey] = arg[nextKey];
            }
        }
    })
    return result;
}

const PAGEMAP = {
    LIST: "list",
    INFO: "info",
    DETAIL: "detail"
}

export {
    PAGEMAP
}