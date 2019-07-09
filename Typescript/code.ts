// const num:number = "123";
// console.log(num);

interface Name {
    first: string;
    last: string;
}
let n:Name = {
    first: "Shai",
    last: "Mesisterano"
};

const displayName = (_name:Name):void => {
    console.log(_name.first + " " + _name.last);
}

const setFullName = (_name:any):string => {
    const { first, last } = _name;
    return first + " " + last;
}

displayName(n);