// function* myfunc() {
//     let a = 10;
//     let b = 12;
//     yield a + b;
// }
// let g = myfunc();
// console.log(g.next().value);

// function* mygen() {
//     let i = 100;
//     while (true) {
//         i++;
//         yield i;
//     }

// }
// let save = mygen();


// function runfunc() {
//     document.getElementById('span1').innerText = save.next().value;
// }


// function* Gen() {
//     yield 20;
// }
// let save2 = Gen()
// console.log(save2.next().value);




// function* func() {
//     yield "Hello"
//     yield "Hasnain"
//     yield "Well Come"
// }
// let save3 = func();
// console.log(save3.next().value);
// console.log(save3.next().value);
// console.log(save3.next().value);



// function* nums() {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5
// }

// let save4 = nums();
// console.log(save4.next().value);
// console.log(save4.next().value);
// console.log(save4.next().value);
// console.log(save4.next().value);
// console.log(save4.next().value);


    function* infinit(){
        let i = 1;
        while(true){
            yield i ;
        }
    }

    infinit().console.log(.next().value);















