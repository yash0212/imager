const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        star_count: {
            type: Number,
            required: false,
            default: 0
        },
        uploaded_by: {
            type: String,
            required: false,
            default: ""
        }
    },
    {
        versionKey: false,
        strict: false,
    }
);

module.exports = mongoose.model("images", ImageSchema);
