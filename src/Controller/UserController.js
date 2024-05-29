const User = require("../Models/UserSchema")

//Add User
exports.addUser = async (req, res) => {
    try {
        let result = await User.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

//All Users
exports.allUser = async (req, res) => {
    try {
        let result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete User
exports.deleteUser = async (req, res) => {
    try {
        let deleteData = await User.findByIdAndDelete({ _id: req.body.userid })
        res.status(200).json(deleteData)
    } catch (error) {
        res.status(500).json(error)
    }
}
//Update Users
exports.updateUser = async (req, res) => {
    try {
        const updateData = await User.findByIdAndUpdate(req.body.userid,
            { UserSalary: req.body.UserSalary },
            { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    }
}

//find Designation
exports.findDesig = async (req, res) => {
    try {
        const findData = await User.find()
        .where('UserDesignation')
        .eq(req.body.UserDesignation)
        res.status(200).json(findData)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.doLogin = async (req, res) => {
    try {
        const result = await User.findOne(req.body)
        if (!result) {
            const message = {
                message: "Login Fail",
                data: result
            }
            res.status(200).json(message)
        } else {
            const message = {
                message: "Login Success",
                data: result
            }
            res.status(200).json(message)

        }
    } catch (error) {
        res.status(500).json(error)
    }
}