let num = Math.pow(3, 2);
console.log(num);


let num1 = Math.pow(2, 3);
console.log(num1);

let num3 = Math.pow(5, 2);
console.log(num);

let num4 = Math.pow(10, 0);
console.log(num4);

let takenum = Math.pow(15, 2);
console.log(takenum);

let cube = Math.pow(15, 3);
console.log(cube);


let check = Math.pow(4, 1);
console.log(check);

let nextcheck = Math.pow(7, 0);
console.log(nextcheck);

let user = prompt("Enter a Number");
let userask = Math.pow(user, 2);
let userasks = Math.pow(user, 3);
console.log(`The squre of ${user} is ${userask}`);
console.log(`The root of ${user} is ${userasks}`)

let pro1 = prompt("Enter any number here");
let pro2 = prompt("Enter here a power which power do you want ")


let final = Math.pow(pro1, pro2);
console.log(`${pro1} ** ${pro2} = ${final}`);

for (let i = 1; i <= 10; i++) {
    let num5 = Math.pow(2, i);
    console.log(`2 ** ${i} = ${num5}`);
}


let sum = 0;
for (let i = 1; i < 11; i++) {
    let val = i ** 2;
    sum += val
}
console.log(sum);

// Task

let baseInp = (prompt("Enter a Base here"));
let exponentInp = (prompt("Enter a Exponent here"));

if (baseInp === "" && exponentInp === "") {
    alert("write a Number in a prompt")
}
else {
    let base = Number(baseInp);
    let exponent = Number(exponentInp);

    if (isNaN(base) || isNaN(exponent)) {
        alert("Just Numbers are allowed")
    }
    else {
        let result = base ** exponent;
        console.log(result);
    }
}











