const fs = require("fs");
const Image = require('../models/Image')

const listAll = async() => {
    const images = await Image.find({});
    return images
}

const create = async (originalname, filePath) => {
    // Read the file contents
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw new Error("Internal server error");
        }

        // Save the file to disk
        fs.writeFile(`./uploads/${originalname}`, data, (err) => {
            if (err) {
                throw new Error("Internal server error");
            }

            const image = new Image({
                link: `/api/images/${originalname}`,
                title: "Dummy",
                star_count: 0
            });

            image.save().then(data=>{
                return {
                    message: "File uploaded successfully",
                    data
                };
            });

        });
    });
};

module.exports = {
    listAll,
    create,
};
