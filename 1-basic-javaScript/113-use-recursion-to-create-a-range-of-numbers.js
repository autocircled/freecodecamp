function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const arr = [startNum];
        return arr.concat(rangeOfNumbers(startNum + 1, endNum));
    }
};

console.log(rangeOfNumbers(5, 7));