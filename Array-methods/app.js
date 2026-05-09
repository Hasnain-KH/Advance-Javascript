// let marks = [40, 55, 70, 30, 90];
// let mymarks = marks.filter(function (num) {
//         return num > 50;

// })
// console.log(mymarks);


// let numbers = [10, 15, 20, 25, 30];
// let odd = numbers.filter(function (numb) {
//     return numb % 2 === 1;
// })
// console.log(odd);


// let students = [
//     { name: "Ali", marks: 45 },
//     { name: "Ahmed", marks: 80 },
//     { name: "Sara", marks: 60 },
//     { name: "Hina", marks: 30 }
// ];

// let stu = students.filter(function (ma) {
//     return ma >= 50
// })
// console.log(stu + "Passed in exam");


// let numbers = [5, 12, 8, 20, 3, 18];

// let num1 = numbers.filter(function (n) {
//     if (n >= 10 && n % 2 === 0) {
//         return n;
//     }
// })
// console.log(num1);

// let names = ["Ali", "Ahmed", "Usman", "Sara", "Hina"];
// let lett = names.filter(function (letter) {
//     if (letter === "A") {
//         return letter;
//     }
// })
// console.log(lett);


// let products = [
//     { name: "Phone", price: 500, inStock: true },
//     { name: "Laptop", price: 1000, inStock: false },
//     { name: "Mouse", price: 200, inStock: true }
// ];
// let object = products.filter(function (obj) {
//     if (obj.inStock === true && obj.price > 300) {
//         return obj;
//     }
// })
// for (let i = 0; i < object.length; i++) {
//     for (let key in object[i]) {
//         let h4 = document.createElement("h4");
//         let h1 = document.createElement("h1");
//         h4.innerText = key;
//         h1.innerText = object[i][key];
//         document.body.append(h1);
//         document.body.append(h4);
//     }
// }

// let names = ["Ali", "Ahmed", "Ayan", "Usman", "Sara", "Hina"];
// let capital = names.filter((na) => {
//     return na[0] === "A";
// })

// for (let i = 0; i < capital.length; i++) {
//     let h2 = document.createElement("h2");
//     h2.classList.add("h2");
//     h2.innerText = capital[i];
//     document.body.append(h2);

//     h2.addEventListener("click", function () {
//         if (document.body.style.backgroundColor === 'white') {
//             document.body.style.backgroundColor = 'black';
//         }
//         else {
//             document.body.style.backgroundColor = "white"
//         }
//     })
// }


// let stu = ["Ali", "Ahmed", "Ayan", "Usman", "Sara", "Hina"];

// let mynames = names.filter((sa) => {
//     return sa.startsWith("A");
// })
// console.log(mynames);

// let names = ["Ali", "Ahmed", "Usman", "Sara", "Hina"];
// let myname = names.filter((sav) => {
//     return sav[sav.length - 1] === "a"
// })

// console.log(myname);


// let orders = [
//     { id: 1, amount: 500, status: "delivered" },
//     { id: 2, amount: 200, status: "pending" },
//     { id: 3, amount: 800, status: "delivered" },
//     { id: 4, amount: 150, status: "cancelled" }
// ];

// let myorder = orders.filter((or) => {
//     if (or.status === "delivered" && or.amount > 300) {
//         console.log(or);
//     }
// })

// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// numbers.filter((num) => {
//     if (num % 2 === 0 && num > 5) {
//         console.log(num);
//     }
// })




// let products = [
//     { id: 1, name: "Phone", price: 500, category: "electronics", inStock: true, rating: 4.5 },
//     { id: 2, name: "Laptop", price: 1200, category: "electronics", inStock: false, rating: 4.8 },
//     { id: 3, name: "Shirt", price: 40, category: "clothing", inStock: true, rating: 4.0 },
//     { id: 4, name: "Headphones", price: 150, category: "electronics", inStock: true, rating: 3.8 },
//     { id: 5, name: "Shoes", price: 80, category: "clothing", inStock: true, rating: 4.3 }
// ];

// let myobj = products.filter((obj) => {
//     return obj.category === "electronics" &&
//         obj.inStock === true &&
//         obj.rating > 4

// })
// let stuname = myobj.map((na) => na.name)
// console.log(stuname);


// ===> Reduce Method <===


// let nums = [5, 10, 15, 20, 34, 56];
// let num = nums.reduce((accu, current, index) => {
//     return accu + current;
//     console.log(index);

// })
// console.log(num);


// let cart = [
//     { name: "Phone", price: 500, quantity: 2 },
//     { name: "Laptop", price: 1000, quantity: 1 },
//     { name: "Headphones", price: 100, quantity: 3 }
// ];

// let cards = cart.reduce((acc, curr) => {
//     return acc + curr.price;
// }, 0)
// let div = document.createElement("div");
// div.append(`The Total price of Cart is : ${cards} rupees`)
// div.classList.add('div3');
// document.body.append(div);


// ===> find method <===


// let marks = [32, 55, 30, 40, 30, 90];

// let mymarks = marks.find((ma) => {
//     return ma === 40;
// })
// console.log(mymarks);

// let myprompt = prompt("Enter here a product name");
// let product = ["laptop", "mobile", "iphone", "chair"];

// let save = product.find((pro) => pro === myprompt);

// let div = document.createElement("div");
// let h2 = document.createElement("h2");
// // div.append(h2);
// div.classList.add("mydiv");
// div.append(`Your ${save} is availible`);
// document.body.append(div);


// ===> every method <===

// let cart = [
//     { name: "Phone", price: 500, inStock: true },
//     { name: "Laptop", price: 1000, inStock: true },
//     { name: "Headphones", price: 100, inStock: true }
// ];

// let instock = cart.every((ins) => {
//     if (ins.inStock !== true) {
//         alert("Some products are out of stock. Please remove them before checkout");
//     }
//     else {
//         alert("All items are availible. Proceed to checkout");
//     }
// });

let cart = [
    {
        name: "Phone",
        quantity: 2,
        stockAvailable: 5
    },
    {
        name: "Laptop",
        quantity: 1,
        stockAvailable: 1
    },
    {
        name: "Headphones",
        quantity: 3,
        stockAvailable: 2
    }
];

let data = cart.every((obj) => {
    return obj.quantity.valueOf
})
console.log(data);

