const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();
const PORT = 8080;

const  queries = {
  get_products: `SELECT p.ProductID, p.ProductName, s.SupplierName, c.CategoryName, c.Description, p.Unit, p.Price, p.PhotoUrl, p.ratings, p.Discount, p.Description as productDescription FROM products p join categories c on c.CategoryID = p.CategoryID join suppliers s on s.SupplierID = p.SupplierID limit 10`,
  get_users: "SELECT * FROM users ORDER BY id desc",
    get_orders: `SELECT o.OrderID, o.OrderDate, p.ProductName, od.quantity, p.price as Price, p.price*od.Quantity as orderPrice, c.customerName, e.firstName, e.LastName, s.ShipperName, cat.Description, p.Description as pro FROM orders o
    JOIN customers c ON c.customerID = o.customerID
    JOIN employees e ON e.EmployeeID = o.EmployeeID
    JOIN shippers s ON s.ShipperID = o.ShipperID
    JOIN order_details od ON od.orderID = o.orderID
    JOIN products p ON p.ProductID = od.ProductID 
    JOIN categories cat ON cat.categoryID = p.categoryID
    limit 10`,
    get_order: `select cust.CustomerName, concat(e.FirstName, ' ',  e.LastName) as EmployeeName, p.ProductName, c.CategoryName, concat(c.Description, ' ', p.Description) as Description, p.Price, p.Price*od.Quantity as orderPrice, o.*, od.* from orders o 
    join order_details od on od.orderID = o.orderID
    join products p on p.productID = od.ProductID
    join categories c on c.categoryID = p.CategoryID
    join customers cust on cust.customerID = o.CustomerID
    join employees e on e.employeeID = o.EmployeeID
    where o.OrderID = 10444`,
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


  app.get("/", (request, response) => {
    const status = {
  
      Status: "Hello",
    };
    response.send(status);
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

  app.post("/order", function (request, response, next) {

    connection.query(queries.get_order, (err, rows) => {
  response.send({
            "status": "ok",
  
            "order": rows,
        });
      })
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
