const usedCommandRecently = new Set();
var i = 0

const addAmount = () => {
    return i++
}

const amount = () => {
    return i
}

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        i = 0
        return usedCommandRecently.delete(from);
    }, 3000);// 1 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        amount,
        addAmount,
        isFiltered,
        addFilter
    }};