const mongoose = require("mongoose");

const LeaveSchema = mongoose.Schema({
    EmpId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LeaveTitle: String,
    LeaveReason: String,
    LeaveType: String,
    LeaveStartDate: Date,
    LeaveEndDate: Date,
    LeaveAppliedDate: { type: Date, default: new Date() },
    LeaveStatus: { type: String, default: "pending" },
    LeavePeriod: Number,
    AdminResponse: { type: String, default: "Yes" }
})

module.exports = mongoose.model("Leave", LeaveSchema)

