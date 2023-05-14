const fs = require('fs');
const ip = process.argv;
// fs.writeFileSync(ip[2], ip[3]);

// we can make or delete any file using cmd. `
if (ip[2] == 'add') {
    fs.writeFileSync(ip[3], ip[4]);
} else if (ip[2] == 'remove') {
    fs.unlinkSync(ip[3]);
} else {
    console.log("invalid input");
}