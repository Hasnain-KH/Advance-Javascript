// task 1:
// function showProfile(skill, experience) {
//     console.log(
//         this.name +
//         " is a " +
//         skill +
//         " developer with " +
//         experience +
//         " years experience"
//     );
// }

// let user1 = {
//     name: "Hasnain"
// };

// let user2 = {
//     name: "Ali"
// };

// showProfile.call(user1, "front end", 2);


// showProfile.call(user2, "backend", 3);

// taks 2:
// function orderDetails(product, price) {
//     console.log(
//         this.username +
//         " ordered " +
//         product +
//         " for $" +
//         price
//     );
// }

// let customer1 = {
//     username: "Hasnain"
// };

// let customer2 = {
//     username: "Ali"
// };

// let customer3 = {
//     username: "hasnain"
// }

// orderDetails.call(customer1, "laptop", "1200");

// orderDetails.call(customer2, "Mouse", 25);

// orderDetails.call(customer3, "mobile", 400);

// task 3:

// function enrollCourse(courseName, duration) {
//     console.log(
//         this.studentName +
//         " enrolled in " +
//         courseName +
//         " course for " +
//         duration + " Months."
//     );
// }

// let student1 = {
//     studentName: "Hasnain"
// };

// let student2 = {
//     studentName: "Ali"
// };

// let student3 = {
//     studentName: "Sufyan"
// }
// enrollCourse.call(student1, "web deveopment ", 14);
// enrollCourse.call(student2, "React JS", 2);
// enrollCourse.call(student3, "web designing", 4);

// bind //

// const person = {
//     name: "Hasnain",
//     age: 20
// };

// const person2 = {
//     name: "Ali",
//     age: 25
// };

// const person3 = {
//     name: "Ayan",
//     age: 22
// }

// function introduce(city, country) {
//     console.log(
//         `My name is ${this.name}, I am ${this.age} years old. I live in ${city}, ${country}.`
//     );
// }

// introduce.apply(person, ["Karachi", "Pakistan"]);
// introduce.apply(person2, ["Lahore", "Pakistan"]);
// introduce.apply(person3, ["Multan", "Pakistan"]);

// const app = document.querySelector("#app");

// const order1 = {
//     restaurant: "multan",
//     item: "Zinger Burger"
// };

// const order2 = {
//     restaurant: "Quidabad",
//     item: "Chicken Biryani"
// };


// function showOrder(customerName, city) {

//     const card = document.createElement("div");

//     card.innerHTML = `
//     The Restaurant name is <h1>${this.restaurant}</h1>
//     And the Item is <h1>${this.item}</h1>
//     And The Customer Name is <h1>${customerName}</h1>
//     And the customer city name is <h1>${city}</h1>
//     `
//     app.append(card);
// }

// showOrder.call(order1, "Hasnain", "Lahore");
// showOrder.apply(order2, ["Hasnain", "Lahore"]);


const account1 = {
    bank: "HBL",
    balance: 50000
};

const account2 = {
    bank: "Meezan Bank",
    balance: 120000
};

function showAccount(customerName, transactionType, amount) {
    console.log(
        `${customerName} performed ${transactionType} of ${amount} PKR in ${this.bank}. Current Balance: ${this.balance} - `
    );
}

showAccount.apply(account1, ["Hasnain", "Deposite", 1000]);
showAccount.apply(account2, ["Sufyan", "withdraw", 3000]);