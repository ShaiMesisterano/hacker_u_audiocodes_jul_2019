//  const myName = getName("Mr. ");
// console.log(myName);
// let getName = function(prefix) {
//     return prefix + "Shai";
// }

//  function getName(prefix) {
//      return prefix + "Shai";
//  }

//  const getName = (prefix) => {
//      const str =  prefix + "Shai";
//      return str;
//  }
//  const result = getName("Mr. ");
//  console.log(result);
// const getName = (prefix, extension) => prefix + "Shai" + extension;

// let keys = ['age', 'shoes'];
// keys.forEach( key => console.log(shai[key]));

// const getName = (prefix) => prefix + " Shai";
// console.log(getName("Mr. "));

// let books = ['Node.js', 'Mr. Mercedes', 'The Bible'];
// let cloneBooks = books;
// let cloneBooks = [...books];
// let cloneBooks = books.concat();
// const removeLastBook = (_books) => {
//     delete _books[_books.length - 1];
//     _books.push("Antigona");
//     // _books.pop();
// };
// removeLastBook(books);
// console.log(books, cloneBooks);
// console.log(books.length, cloneBooks.length);
// cloneBooks.push("Catch 22");
// console.log(books);

// let name = "Shai";
// let cloneName = name;
// const addPrefix = (_name, prefix) => {
//     _name += prefix;
// }
// addPrefix(name, "Mr. ");
// console.log(name);

// const shai = {
//     age: 34,
//     shoes: {
//         color: "black",
//         size: 45
//     }
// }
// const cloneShai = {...shai};
// const cloneShai = JSON.parse(JSON.stringify(shai));
// shai.shoes.color = "red";
// console.log(shai, cloneShai);
// console.log(JSON.stringify(cloneShai));
// let str = '{"x": "123"}';
// console.log(JSON.parse(str));
// x = 1;
// function foo(a, b) {
//     console.log(this.x);
//     console.log(a,b)
    // let name = "shai";
    // let suffix = "???";
    // function getName() {
    //     console.log(this)
    //     let suffix = "!!!";
    //     return name + suffix;
    // }
    // const getName = () => {
    //     console.log(this);
    //     let suffix = "!!!";
    //     return name + suffix;
    // }
    // getName();
    // console.log(suffix);
    // console.log(getName());
    // console.log(this);
// }

// foo("A", "B");
// foo.call({
//     x: 999
// }, "A", "B")
// foo.apply({x: 888}, ["A", "B"]);

// function Person(name){
//     let _name = name;
//     let obj = {};

//     function printName() {
//         console.log(`Hello ${_name}`);
//     }



    // obj.printName = printName;

//     return {
//         printName
//     }
// }

// function Person(name) {
//     this._name = name;
//     this.printName = function() {
//         console.log(this._name);
//     }
// }

// function Person(name) {
//     this._name = name;
// } 

// Person.prototype.printName = function() {
//     console.log(this._name);
// }

// Person.prototype.changeName = function(newName) {
//     this._name = newName;
// }

// let person1 = new Person("Avi");
// let printAmos = person1.printName.bind({_name: "Amos"})
// let person2 = new Person("Ron");
// person1.printName();
// person2.printName();
// person1.changeName("Doron");
// person1.printName();

let names = ['gal', 'oren', 'benny'];
// Array.prototype.filter = null;
const result = names.filter( name => {
    return name.indexOf("o") > -1;
});
console.log(result);