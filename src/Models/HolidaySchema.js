const mongoose = require("mongoose")

const HolidaySchema = mongoose.Schema({
    HolidayMonth:String,
    HolidayYear:String,
    HolidayDay:String,
    HolidayEvent:String
})

module.exports = mongoose.model("Holiday",HolidaySchema)