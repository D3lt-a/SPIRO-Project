const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    VehicleID : {
        type: String,
        required: true
    },
    VehicleType : {
        type: String,
        required: true
    },
    createdAt: {
        timestamps: true
    }
})

module.exports = mongoose.model("User", userSchema)