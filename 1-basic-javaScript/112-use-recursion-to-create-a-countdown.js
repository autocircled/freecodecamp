// Use Recursion to Create a Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    } else if (n === 1) {
        return [1];
    } else {
        const arr = [n];
        const newArr = countdown(n - 1);
        return arr.concat(newArr);
    }
}

console.log("-1", countdown(-1));
console.log("10", countdown(10));
console.log("5", countdown(5));