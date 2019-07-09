// logical AND/OR
// AND
let str = "Hello";
let z = true && str;
console.log(z);
// OR
let y = "Hello" || "World";
console.log(y);

// conditions
let x = 1;
let y = "1";
console.log(x == y);
console.log(x === y);

// typeof
typeof x;

// isNaN
isNaN("x");

// if statement
let x = 2;
if (x > 1){
	console.log("more than one...");
}
else {
console.log("equal or less than one...");
}

// ternary operator
let str = x > 1 ? "more than one" : "equal or less than one";
console.log(str);

// switch case
let x = 2;
switch (x) {
    case '1':
    case 'x':
    case '2':
		console.log("equal");
		break;
    default:
		console.log("not equal");
}