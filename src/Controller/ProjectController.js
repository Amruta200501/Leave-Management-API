const Project = require("../Models/ProjectSchema")

//Add Project
exports.addProject = async (req, res) => {
    try {
        let addData = await Project.create(req.body)
        res.status(200).json(addData)
    } catch (error) {
        res.status(500).json(error)
    }
}
//All Project
exports.allProject = async (req, res) => {
    try {
        let allData = await Project.find()
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete Project
exports.deleteProject = async (req, res) => {
    try {
        let deleteData = await Project.findByIdAndDelete({ _id: req.body.projectid })
        res.status(200).json(deleteData)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update Project
exports.updateProject = async (req, res) => {
    try {
        const updateData = await Project.findByIdAndUpdate(req.body.projectid,
            { ProjectStatus: req.body.ProjectStatus },
            { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    }
}

//find Project
exports.getUserByEmpId = async (req, res) => {
    try {
        const findData = await Project.find()
            .where('EmpId')
            .eq(req.body.EmpId)
        res.status(200).json(findData)
    } catch (error) {
        res.status(500).json(error)
    }
}