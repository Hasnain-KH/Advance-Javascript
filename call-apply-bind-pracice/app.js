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

// apply //

let div = document.createElement("div");
let h1 = document.createElement("h1");

div.append(h1);

document.body.append(div)

function showName(fathername) {
    div.innerText = this.name + fathername;
}

let student = {
    name: "hasnain "
}

showName.bind(student, ["Riaz Muhammad"]);





