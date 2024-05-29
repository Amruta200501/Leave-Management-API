const Holiday = require("../Models/HolidaySchema")

//Add Holiday
exports.addHoliday = async (req, res) => {
    try {
        let addData = await Holiday.create(req.body)
        res.status(200).json(addData)
    } catch (error) {
        res.status(500).json(error)
    }
}

//All Holiday
exports.allHoliday = async (req, res) => { 
    try {
        let allData = await Holiday.find()
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).json(error)
    }
}
