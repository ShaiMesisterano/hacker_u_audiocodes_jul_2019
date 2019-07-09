"use strict";
// const num:number = "123";
// console.log(num);
let n = {
    first: "Shai",
    last: "Mesisterano"
};
const displayName = (_name) => {
    console.log(_name.first + " " + _name.last);
};
const setFullName = (_name) => {
    const { first, last } = _name;
    return first + " " + last;
};
displayName(n);
