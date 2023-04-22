const express = require("express");
const app = express();
const appRouter = require("./router");


app.use("/api/", appRouter);

// Start the server
app.listen(8080, () => {
    console.log("Server started on Port 8080");
});
