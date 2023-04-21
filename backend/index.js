const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Works Fine!" });
});

// Start the server
app.listen(8080, () => {
    console.log("Server started on Port 8080");
});
