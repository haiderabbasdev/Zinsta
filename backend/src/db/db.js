const mongoose = require("mongoose");



function connectDB() {
    mongoose.connect("mongodb://localhost:27017/Zinsta")
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection failed", error);
            process.exit(1);
        })
}

module.exports = connectDB;