const mongoose = require("mongoose");

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}/${process.env.DB_NAME}?readPreference=secondaryPreferred`
    )
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(() => {
        console.log("Connection to MongoDB failed");
    });
