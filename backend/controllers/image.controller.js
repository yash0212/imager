const fs = require("fs");
const path = require("path");

const listAll = (req, res) => {
    res.status(200).json({ message: "Get Images" });
};

const get = (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "../uploads",
            req.originalUrl.replace("/api/images", "")
        )
    );
};

const create = (req, res) => {
    const { originalname, path: filePath } = req.file;

    // Read the file contents
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // Save the file to disk
        fs.writeFile(`./uploads/${originalname}`, data, (err) => {
            if (err) {
                return res
                    .status(500)
                    .json({ message: "Internal server error" });
            }

            return res.status(201).json({
                message: "File uploaded successfully",
                uploaded_path: `/api/images/${originalname}`,
            });
        });
    });
};

module.exports = {
    listAll,
    get,
    create,
};
