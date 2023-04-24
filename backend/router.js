const express = require("express");
const router = express.Router();
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
const imageRouter = require("./routes/image.router");

router.get("/", (req, res) => {
    res.status(200).json({ message: "Works Fine!" });
});

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/images", imageRouter);

module.exports = router;
