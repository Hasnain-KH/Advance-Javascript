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

// function outer2() {
//     let name = "Hasnain";
//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }

// let final = outer2();
// final();


// function abc() {

//     let occupation = "Full Stack web developer"
//     let firstName = "Hasnain";
//     let LastName = "Riaz";
//     function de() {
//         console.log(`${occupation} ${firstName} ${LastName}`);
//     }
//     return de;
// }

// let print = abc();
// print();



function abc() {
    let pro = prompt("Enter here your name ");
    let occupatoin = "is a web developer"
    function de() {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText = `${pro} ${occupatoin}`
        div.append(h1);
        div.classList.add("div")
        document.body.append(div)
    }
    return de;
}

let print2 = abc();
print2();

