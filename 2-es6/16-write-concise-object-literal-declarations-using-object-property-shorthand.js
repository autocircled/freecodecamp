const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name,
        age,
        gender
    };
    // Only change code above this line
};

const person = createPerson(
    'Moktadir',
    36,
    'male'
);

console.log(person);