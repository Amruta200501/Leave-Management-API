const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
    ProjectTitle: String,
    ProjectDescription: String,
    ProjectStatus: String,
    ProjectStartDate: Date,
    ProjectEndDate: Date,
    EmpId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ManagerId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

module.exports = mongoose.model("Project", ProjectSchema)