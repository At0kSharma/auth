import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Provide a name"],
        unique: false,
    },
    email: {
        type: String,
        require: [true, "Please Provide a emial"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please Provide a password"],
    },
    isVarified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;