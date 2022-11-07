const express = require("express");
const path = require("path");
const userController = require("./domain/users/controller");

const PORT = 5000;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/users", userController.getAll); // По маршруту /users отработать getAll метод из контроллера

app.listen(PORT, () => console.log("server started on PORT : " + PORT));
