
const path = require("path");
const imageService = require("../services/image.service");

const listAll = async (req, res) => {
    try {
        const resp = await imageService.listAll();

        return res.status(201).json(resp);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
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

const create = async (req, res) => {
    try {
        const { originalname, path: filePath } = req.file;
        const resp = await imageService.create(originalname, filePath);

        return res.status(201).json(resp);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    listAll,
    get,
    create,
};
