// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
//     res.send(`<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Table</title>
// </head>

// <body>
//     <!-- <table border="3" cellpadding="20" cellspacing="5" bgcolor="yellow" bordercolor="red" background="th.jpeg" height = "150" width ="400"> -->
//     <table border="1" cellpadding="20" cellspacing="5" bgcolor="yellow" bordercolor="red">
//         <!-- <tr>
//             <th>Name</th>
//             <th>Salary</th>
//             <th>employee id</th>
//         </tr>
//         <tr>
//             <td rowspan="2">rowspan</td>
//             <td>Row 1,Column 1</td>
//             <td>Row 1,Column 2</td>
//         </tr>
//         <tr>
//             <td>Row 2,Column 1</td>
//             <td>Row 2,Column 2</td>
//         </tr>
//         <tr>
//             <td colspan="3" align="center">colspan</td>
//         </tr> -->

//         <thead>
//             <tr>
//                 <td colspan="4">THIS IS THE HEADING OF THE TABLE</td>
//             </tr>
//         </thead>
//         <tfoot>
//             <tr>
//                 <td colspan="4">THIS IS THE FOOTER OF THE TABLE</td>
//             </tr>
//         </tfoot>
//         <tbody>
//             <tr>
//                 <td>Abhinav</td>
//                 <td>Abes</td>
//                 <td>College</td>
//                 <td>ghaziabad</td>
//             </tr>
//         </tbody>
//     </table>
// </body>

// </html>`);
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.listen(5500);