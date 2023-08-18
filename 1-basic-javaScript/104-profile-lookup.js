// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let found = 0;
    let error = '';
    contacts.forEach((el) => {
        // console.log(el.firstName);
        if (name === el.firstName) {
            found = 1;
            if (el.hasOwnProperty(prop)) {
                error = el[prop];
            } else {
                error = "No such property";
            }
        }
    });
    if (found === 0) {
        error = "No such contact";
    }
    return error;
    // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));