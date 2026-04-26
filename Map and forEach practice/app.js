//-------map-------//

// let numbers = [5, 10, 15, 20];

// let arr = numbers.map(num => num * 3)
// console.log(arr);

// let fruits = ["apple", "banana", "mango"];

// let fruite = fruits.map(names => {
//     return names.toUpperCase() + " fresh"
// })
// console.log(fruite);


// let fruites2 = ["APPLE", "BANANA", "MANGO"];

// let fruite2 = fruites2.map(names2 => names2.toLowerCase() + " =" + " fresh");
// console.log(fruite2);

// let students = [
//     { name: "Ayan", marks: 45 },
//     { name: "Sufyan", marks: 68 },
//     { name: "bacha", marks: 33 }
// ];

// let studentsData = students.map(info => {
//     let passingMarks = 40;
//     console.log(`Passing Marks is ${passingMarks}`);

//     info.marks >= 40 ? console.log(`Name: ${info.name} Obtained Marks ${info.marks} you have passed !`) : console.log(`Name : ${info.name} and Obtained Marks ${info.marks} you are Fail !`);

//     return info.marks;
// })

// console.log(studentsData);



// let prices = [199, 299, 399];

// let newprice = prices.map(number => number + number * 0.10)
// console.log(newprice);


// First way to emit the name price and imageUrl// implicit
// let products = [
//     { id: 1, name: "Laptop", price: 55000, imageUrl: "laptop.jpg", stock: 10, discount: 5, category: "Electronics", vendor: "Dell" },
//     { id: 2, name: "Mouse", price: 800, imageUrl: "mouse.jpg", stock: 50, discount: 0, category: "Accessories", vendor: "Logitech" },
//     { id: 3, name: "Keyboard", price: 2500, imageUrl: "keyboard.jpg", stock: 20, discount: 10, category: "Accessories", vendor: "HP" }
// ];

// let myproducts = products.map(product => ({
//     name: product.name,
//     price: product.price,
//     img: product.imageUrl
// }))
// console.log(myproducts);


//Second way to emit the name price and imageUrl// explicit

// let products = [
//     { id: 1, name: "Laptop", price: 55000, imageUrl: "laptop.jpg", stock: 10, discount: 5, category: "Electronics", vendor: "Dell" },
//     { id: 2, name: "Mouse", price: 800, imageUrl: "mouse.jpg", stock: 50, discount: 0, category: "Accessories", vendor: "Logitech" },
//     { id: 3, name: "Keyboard", price: 2500, imageUrl: "keyboard.jpg", stock: 20, discount: 10, category: "Accessories", vendor: "HP" }
// ];

// let myproducts2 = products.map(product2 => {
//     return {
//         name: product2.name,
//         price: product2.price,
//         image: product2.imageUrl
//     };
// })

// console.log(myproducts2);

// Third way to print the name price and imageUrl // implicit

// let products = [
//     { id: 1, name: "Laptop", price: 55000, imageUrl: "laptop.jpg", stock: 10, discount: 5, category: "Electronics", vendor: "Dell" },
//     { id: 2, name: "Mouse", price: 800, imageUrl: "mouse.jpg", stock: 50, discount: 0, category: "Accessories", vendor: "Logitech" },
//     { id: 3, name: "Keyboard", price: 2500, imageUrl: "keyboard.jpg", stock: 20, discount: 10, category: "Accessories", vendor: "HP" }
// ];

// let myproduct3 = products.map(product3 => ({ name: product3.name, price: product3.price, image: product3.imageUrl }))
// console.log(myproduct3);

// with Array // 
let products = [
    { id: 1, name: "Laptop", price: 55000, imageUrl: "laptop.jpg", stock: 10, discount: 5, category: "Electronics", vendor: "Dell" },
    { id: 2, name: "Mouse", price: 800, imageUrl: "mouse.jpg", stock: 50, discount: 0, category: "Accessories", vendor: "Logitech" },
    { id: 3, name: "Keyboard", price: 2500, imageUrl: "keyboard.jpg", stock: 20, discount: 10, category: "Accessories", vendor: "HP" }
];

let productArr = products.map(item => [item.name, item.price, item.imageUrl])
console.log(productArr);












