const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")
const multer = require("multer")
const path = require("path")

const Server = express()
Server.use(bodyparser.urlencoded({ extended: false }))
Server.use(bodyparser.json())
Server.use(cors())

//DataBase Connection
mongoose.connect("mongodb://127.0.0.1:27017/LeaveManagementdb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Database not connected");
});

const fileStorageConfig = multer.diskStorage({
    destination: "Uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const fileUploadConfig = multer({
    storage: fileStorageConfig,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
            return cb(new Error("Please Upload Correct File"))
        }
        cb(undefined, true)
    }
})

Server.post("/uploadfile",
    fileUploadConfig.single('image'), (req, res) => {
        res.status(200).json({
            filepath: "/images/".concat(req.file.filename),
            uploaded: true
        })
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message })
    }
)

//Routes Attachment
Server.use("/leavemanagementapi/", require("./src/Routes/Routes"))

Server.use(express.static("Uploads"))
Server.use("/images",express.static("Uploads"))

Server.listen(5000, () => {
    console.log("Server Started");
})