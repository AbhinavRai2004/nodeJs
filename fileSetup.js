// global modules.
console.log("lecture 6");

// Non-global modules.
// const fs = require('fs');
// fs.writeFileSync("hello.txt", "this is my first file");

// to check your directory name.
console.log("-->", __dirname);

// to check the file name in which you are.

console.log("-->", __filename);

// to import a particular feature of a module in your code.
const fs = require('fs').writeFileSync;
fs("hello.txt", "abhinav rai");