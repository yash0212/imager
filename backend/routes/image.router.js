const express = require("express");
const router = express.Router();
const imageController = require("../controllers/image.controller");
const multer = require("multer");
const path = require("path");
const { validateToken } = require("../middlewares/auth.middleware");

// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./temp");
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
router.post(
    "/",
    [validateToken, upload.single("image")],
    imageController.create
);

module.exports = router;
