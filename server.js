
var express = require('express');
var bodyParser = require("body-parser");
const path = require('path');


var users = [
    { id: 1, username: "umar", password: 'abcd1234' },
    { id: 2, username: "test", password: '1234' },
]

var server = express()

server.use(express.static('./build'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

require('./server/config/db-config');
require('./server/routes/all-routes')(server);

server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})
if (process.env.NODE_ENV === 'production') {
  server.use(express.static( 'client/build' ));

  server.get('*', (req, res) => {
      res.sendFile(path.join(__firname, 'client', 'build', 'index.html'));
  })
}
server.listen(process.env.PORT || 5000, () => console.log("server is running"))








// const express = require('express');

// const app = express();
// const path = require('path');

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, name: 'Bed', price: '50000'},
//     {id: 2, name: 'Sofa', price: '40000'},
//     {id: 3, name: 'Chair', price: '5000'},
//   ];

//   res.json(customers);
// });

// const port = process.env.PORT || 5000; //step 1

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static( 'client/build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__firname, 'client', 'build', 'index.html'));
//     })
// }

// app.listen(port, () => `Server running on port ${port}`);