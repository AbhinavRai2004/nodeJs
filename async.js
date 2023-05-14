// node js is a asynchronous single threaded language.

// example 1.

// console.log("first Line");

// setTimeout(() => {
//     console.log("second Line");
// }, 2000);

// console.log("third Line");

// example 2.

var a = 10;
var b = 20;

setTimeout(() => {
    b = 30;
})

console.log(a + b);