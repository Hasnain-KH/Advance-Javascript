// function outer() {
//     let username = "hasnain";
//     function inner() {
//         console.log(username);
//     }
//     return inner;
// }
// let res = outer();
// res();



// function num2() {
//     let count = 0;
//     function num3() {
//         count++;
//         console.log(count)
//     }
//     return num3;
// }
// let result = num2();
// console.log(result());
// console.log(result());

function outer2() {
    let name = "Hasnain";
    function inner() {
        console.log(name);
    }
    return inner;
}

let final = outer2();
final();
