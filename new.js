class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 25000);
console.log(heroPerson);
const friendlyPerson = new person('Hero', 'Kalam', 20000);
console.log(friendlyPerson);



// This is Old way before ES6

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const goodBoy = new Person1('Amin', 'Mohammad', 30000);
console.log(goodBoy);
const badBoy = new Person1('Hamar', 'Mokha', 10000);
console.log(badBoy);