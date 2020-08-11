const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Amin',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Basir',
    salary: 25000
}

const hardPerson = {
    firstName: 'Hero',
    lastName: 'Hamar',
    salary: 25000
}

// normalPerson.chargeBill()

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(3000);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(7000);
// console.log(friendlyPerson.salary);

// const hardBillCharge = normalPerson.chargeBill.bind(hardPerson);
// hardBillCharge(12000);
// console.log(hardPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900);
// normalPerson.chargeBill.call(friendlyPerson, 1200);
// normalPerson.chargeBill.call(hardPerson, 14000);
// console.log(friendlyPerson.salary);
// console.log(hardPerson.salary);
// console.log(heroPerson.salary);


