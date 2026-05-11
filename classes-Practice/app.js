// Task No 1 :
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get intro() {
//         return `${this.name} and ${this.age}`;
//     }
// }

// let person = new Person("hasnain", 18);
// let person1 = new Person("Sufyan", 14);
// let person2 = new Person("Ayan", 10);
// let person3 = new Person("kashif", 20);

// console.log(person.intro);
// console.log(person1.intro);
// console.log(person2.intro);
// console.log(person3.intro);

// Task No 2:

// class Students {
//     constructor(name, course) {
//         this.name = name;
//         this.course = course;
//     }
//     get intro() {
//         return `My name is ${this.name} and I am learning ${this.course}`
//     }
// }
// let save = new Students("hasnain riaz", "webdevelopment");
// console.log(save.intro);

// Task No 3:

class BankAccount {
    constructor(username, balance) {
        this.username;
        this.balance;
    }
    deposite(amount) {
        return this.balance = this.balance + amount;
    }
    withdraw(amount) {
        return this.balance = this.balance - this.amount;
    }
    info() {
        return
    }
}

BankAccount.deposite(2000);
BankAccount.withdraw(1000);
let bank = new BankAccount("Hasnain", 10000);
console.log(bank.info());




