const users = require("../users");

const signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find the user by email
    const user = users.find((u) => u.email === email);

    // Check the password
    if (password === user?.password) {
        const encodedCredentials = btoa(`${email}:${password}`);
        const token = `Basic ${encodedCredentials}`;
        return res
            .status(200)
            .json({ message: "Login successful", token: token });
    } else {
        return res.status(401).json({ error: "Invalid email or password" });
    }
};

module.exports = {
    signin,
};
