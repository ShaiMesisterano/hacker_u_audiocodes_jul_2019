class User {
    constructor(firstName, lastName, age, height, hairColor, isActive, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.hairColor = hairColor;
        this.isActive = isActive;
        this.id = id;
    }

    modify(prop, value) {
        this[prop] = value;
    }

    read(prop) {
        return this[prop];
    }
}

// let shai = new User('Shai', 'Mesisterano', 34, 187, null, true, 123);

module.exports = User;

// function printFirstName() {
//     console.log(this.firstName);
// }

// module.exports = { printFirstName };