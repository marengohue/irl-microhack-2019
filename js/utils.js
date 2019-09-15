function xyToIndex(x, y, width) {
    if (typeof x !== 'number' || x < 0 || x >= width) {
        throw new Error('change x');
    }
    else if (typeof y !== 'number' || y < 0 && y >= width) {
        throw new Error('change y');
    }
    return x + (y * width);
}

function indexToXy(index, width) {
    return [
        index % width,
        index / width
    ];
}