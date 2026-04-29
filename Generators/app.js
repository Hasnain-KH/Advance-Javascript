function* myfunc() {
    let a = 10;
    let b = 12;
    yield a + b;
}
let g = myfunc();
console.log(g.next().value);

