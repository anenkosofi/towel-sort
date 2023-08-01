// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix?.length) {
        return [];
    }
    return matrix.reduce(
        (acc, item, index) =>
            index % 2
                ? (acc = [...acc, ...item.reverse()])
                : (acc = [...acc, ...item]),
        []
    );
};
