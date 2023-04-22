const listAll = (req, res) => {
    res.status(200).json({ message: "Get Images" });
};

const get = (req, res) => {
    res.status(200).json({ message: "Get Single Image" });
};

const create = (req, res) => {
    console.log(req)
    res.status(201).json({ message: "Image added" });
};

module.exports = {
    listAll,
    get,
    create
};
