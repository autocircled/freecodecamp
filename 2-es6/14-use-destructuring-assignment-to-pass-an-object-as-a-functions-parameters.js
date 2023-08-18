// const profileUpdate = ({ name, age, nationality, location }) => {
//     // const { name, age, nationality, location } = profileData;

//     console.log(`My name is ${name}, I am ${age} years old, I am from ${nationality}, I live in ${location}`);

// }

// profileUpdate({
//     name: 'John Doe',
//     age: 34,
//     nationality: 'American',
//     location: 'New York'
// });

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

console.log(half(stats));