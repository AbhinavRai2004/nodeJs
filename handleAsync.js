// how to handle the problem of asynchronous language.
// we use Promise.


var a = 10;
var b = 20;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000)
})

waitingData.then((data) => {
    console.log(a + data);
})