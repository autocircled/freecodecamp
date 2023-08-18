// /**
//  * Generates a function comment for the given function body.
//  *
//  * @param {...*} args - The arguments passed to the function.
//  * @return {string} - The generated function comment.
//  */
// function howMany(...args) {
//     const [a, b, c, d, { name } = d] = args;
//     return "You have passed " + args.length + " arguments. The first is " + a + ", the second is " + b + ", the third is " + c + ", and the fourth is " + d + ". and name is " + name;
// }
// // console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { "name": "freecodecamp" }));


// /**
//  * Calculates the sum of all the numbers provided.
//  *
//  * @param {...number} args - The numbers to be summed.
//  * @return {number} The total sum of all the numbers.
//  */
// const sum = (...args) => {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));
function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    console.log(max_num);
    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;

}

console.log(find_max([1, 52, 31, 4, 5]));