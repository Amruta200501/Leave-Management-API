const Leave = require("../Models/LeaveSchema");

//Add Leave
exports.addLeave = async (req, res) => {
  try {
    let addData = await Leave.create(req.body);
    res.status(200).json(addData);
  } catch (error) {
    res.status(500).json(error);
  }
};

//All Leave
exports.allLeave = async (req, res) => {
  try {
    let result = await Leave.find().populate("EmpId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete Leave
exports.deleteLeave = async (req, res) => {
  try {
    let deleteData = await Leave.findByIdAndDelete({ _id: req.body.leaveid });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update Leave
exports.updateLeave = async (req,res) => {
  try {
    const updateData = await Leave.findByIdAndUpdate(
      req.body.leaveid,
      { LeaveStatus: req.body.LeaveStatus },
      { new: true }
    );
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json(error);
  }
};