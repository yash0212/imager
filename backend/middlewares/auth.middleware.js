const users = require("../users");

const validateToken = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        const decodedCredentials = Buffer.from(token, "base64").toString(
            "ascii"
        );

        const [email, password] = decodedCredentials.split(":");
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        // Check if request has wrong credentials
        if (!user) {
            res.status(401).send("Invalid email or password");
            return;
        }

        req.user = user;
        next();
    } else {
        return res
            .status(401)
            .json({ message: "Please provide authorization header" });
    }
};

module.exports = {
    validateToken,
};
