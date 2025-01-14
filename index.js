let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("public"));

let productRoutes = require("./server/routes/products");
// let vehicleRoutes = require("./server/routes/vehicles");
// let commentRoutes = require("./server/routes/comments");
let contactRoutes = require("./server/routes/contacts");

app.use(productRoutes);
// app.use(vehicleRoutes);
// app.use(commentRoutes);
app.use(contactRoutes);

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  err => {
    console.log("the error is", err);
    //start web server
  }
);

const thePort = 3001;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});

//=========Original Code for indexjs==========/
//*****Comments******/

// app.get("/comments", function(req, res, next) {
//   return res.json(comments);
// });
// app.get("/comments/:id", function(req, res) {
//   let commentsID = comments.find(p => p._id == req.params.id);
//   res.json(commentsID);
// });

// app.post("/comments", (req, res) => {
//   let newComment = req.body;
//   comments.push(newComment);
//   res.json(newComment);
// });
//*****Contacts********/
// app.get("/contacts", function(req, res, next) {
//   return res.json(contacts);
// });

// app.get("/contacts/:id", function(req, res) {
//   let contactsID = contacts.find(p => p._id == req.params.id);
//   res.json(contactsID);
// });
// app.post("/contacts", function(req, res) {
//   contacts.push(req.body);
//   console.log(req);
// });

//*****Vehicles********/
// app.get("/vehicles", function(req, res, next) {
//   return res.json(vehicles);
// });
// app.get("/vehicles/:id", function(req, res) {
//   let vehicleID = vehicles.find(p => p._id == req.params.id);
//   res.json(vehicleID);
// });
// app.post("/vehicles", function(req, res) {
//   let vehicle = req.body;
//   vehicles.push(vehicle);
// });
//*****Products********/
// app.get("/products", function(req, res, next) {
//   return res.json(products);
// });

// app.get("/products/:id", function(req, res) {
//   let productsID = products.find(p => p._id == req.params.id);
//   res.json(productsID);
// });
// app.post("/products", (req, res) => {
//   let newProduct = req.body;
//   products.push(newProduct);
//   res.json(newProduct);
// });
