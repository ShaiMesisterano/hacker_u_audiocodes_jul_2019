console.log("1");

const callback = () => console.log("2");
setTimeout( callback, 0 );

console.log("3");