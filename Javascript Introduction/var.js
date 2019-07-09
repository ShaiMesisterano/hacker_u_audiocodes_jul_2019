// variables
var x = 0;
let y = 1;
const z = 2;

// hoisting
function foo(){
	console.log(y);
	var x = 2;
}

function foo(){
	console.log(zz);
	const zz = 4;
}
foo();

function bar() {
	console.log(y);
	let y = "hello";
}
bar();

// Template literals
let str = `My name is ${name + "!!!"}`;
str = `My\nname is\n${name + "!!!"}`;
name = 'David\'s';
str = `My
name is
${name + "!!!"}`;


// Casting
let x = "1";
let y = parseInt(x) + 1; 
// let y = Number(x) + 1;
// let y = +x + 1;
console.log(y);