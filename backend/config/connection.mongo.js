const mongoose = require("mongoose");

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@imager.in3nwux.mongodb.net/test?readPreference=secondaryPreferred`
    )
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(() => {
        console.log("Connection to MongoDB failed");
    });
