const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    UserName: String,
    UserEmail: String,
    UserPassword: String,
    UserMobileNo: Number,
    UserSalary: String,
    UserImage: String,
    UserDateOfBirth: Date,
    UserGender: String,
    UserDesignation: String,
    UserDepartment: String,
    UserJoiningDate: Date,
    UserReleavingDate: Date

})
module.exports = mongoose.model("User", UserSchema)
