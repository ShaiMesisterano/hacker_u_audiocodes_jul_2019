const {User, Admin} = require('./mymodules');

let shai = new User('Shai', 'Mesisterano', 34, 187, null, true, 123);

console.log(shai.read("lastName"));

// const prop = "shoeSize";
// shai.modify(prop, 45);

// console.log(shai.read(prop));

// let newAdmin = new ExportAdmin();
// console.log(newAdmin.role);

// const bound = shai.read.bind({
//     shoe: {size: 55}
// });

// console.log(bound("shoe"));

// console.log(printFirstName)

// printFirstName.call({
//     firstName: "John"
// });

// console.log(user.read("lastName"));