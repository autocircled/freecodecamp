const s = [5, 6, 7];
// s = [1, 2, 3]; // Error
s[2] = 45;
console.log(s);

const ss = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    ss[0] = 2;
    ss[1] = 5;
    ss[2] = 7;
    console.log(ss);
    // Only change code above this line
}
editInPlace();