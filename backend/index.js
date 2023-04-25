require("dotenv").config();
const express = require("express");
const app = express();
const appRouter = require("./router");
require('./config/connection.mongo')

app.use(express.json());
app.use("/api/", appRouter);

// Start the server
app.listen(8080, () => {
    console.log("Server started on Port 8080");
});
