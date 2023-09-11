const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();
const PORT = 8080;

const  queries = {
  get_products: `SELECT p.ProductID, p.ProductName, s.SupplierName, c.CategoryName, c.Description, p.Unit, p.Price, p.PhotoUrl, p.ratings, p.Discount, p.Description as productDescription FROM products p  join categories c on c.CategoryID = p.CategoryID join suppliers s on s.SupplierID = p.SupplierID limit 10`,
  get_users: "SELECT * FROM users ORDER BY id desc",
  get_orders: `SELECT o.OrderID, o.OrderDate, p.ProductName, od.quantity, p.price*od.Quantity as price, c.customerName, e.firstName, e.LastName, s.ShipperName FROM orders o
  JOIN customers c ON c.customerID = o.customerID
  JOIN employees e ON e.EmployeeID = o.EmployeeID
  JOIN shippers s ON s.ShipperID = o.ShipperID
  JOIN order_details od ON od.orderID = o.orderID
  JOIN products p ON p.ProductID = od.ProductID limit 10`
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1#",
  database: "w3schools",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully..!!");
  }
});

/*
app.use(express.json({
  extended: true,
  inflate: true,
  limit: '100kb',
  parameterLimit: 1000,
  type: 'application/x-www-form-urlencoded',
  verify: undefined
}))
//app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
*/

app.get("/status", (request, response) => {
  const status = {

    Status: "Running",
  };
  response.send(status);
});

app.get("/tabledata", (request, response) => {
  const tabledata = [
    {
      name: "Frozen yoghurt",
      image: "yoghurt.jpeg",
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4,
    },
    {
      name: "Ice cream sandwich",
      image: "icecream.jpeg",
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: "Eclair",
      image: "Eclair.jpeg",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6,
    },
    {
      name: "Cupcake",
      image: "cupcake.jpg",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      name: "Gingerbread",
      image: "gingerbread.jpeg",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
  ];
  response.send(tabledata);
});

app.post("/signin_old", (request, response) => {
  const userTable = [
    {
      user: "admin",
      password: "Password1",
    },
    {
      user: "user1",
      password: "Password1",
    },
    {
      user: "user2",
      password: "Password1",
    },
    {
      user: "martin",
      password: "Password1",
    },
  ];

  const user = request.body.user;
  const password = request.body.password;
  for (let i = 0; i < userTable.length; i++) {
    if (userTable[i].user === user && userTable[i].password === password) {
      response.send({
        status: "ok",
        user: user,
      });
    }
  }

  response.send({
    status: "fail",
    user: user,
  });
});

// display user page
app.post("/signin", function (request, response, next) {
  const user = request.body.user;
  const password = request.body.password;
  let done = false;
  connection.query(queries.get_users, (err, rows) => {
      for(let i = 0; i <rows.length;i++){
      if(rows[i].username === user && rows[i].password === password){
        done = true;
        response.send({
          "status": "ok",
          "user": user,
      });
      }
    }
  
    if(!done)
      response.send({
        status: "fail",
        user: user,
      });
  });
  
});


app.post("/products", function (request, response, next) {

  connection.query(queries.get_products, (err, rows) => {
        response.send({
          "status": "ok",

          "products": rows,
      });
    })
});


app.post("/orders", function (request, response, next) {

  connection.query(queries.get_orders, (err, rows) => {
        response.send({
          "status": "ok",

          "orders": rows,
      });
    })
});

