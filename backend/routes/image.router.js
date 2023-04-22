const express = require("express");
const router = express.Router();
const imageController = require("../controllers/image.controller");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// Create multer object
const upload = multer({ storage });

router.get("/", imageController.listAll);
router.get("/:imageSlug", imageController.get);
router.post("/", [upload.single("image")], imageController.create);

module.exports = router;
