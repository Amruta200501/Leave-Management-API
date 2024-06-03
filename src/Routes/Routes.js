const express = require("express");
const router = express.Router();

//User Routes
const UserController = require("../Controller/UserController");
router.post("/adduser", UserController.addUser);
router.get("/alluser", UserController.allUser);
router.delete("/deleteuser", UserController.deleteUser);
router.put("/updateuser", UserController.updateUser);
router.post("/finddesig", UserController.findDesig);
router.post("/dologin", UserController.doLogin);

//Project Routes
const ProjectController = require("../Controller/ProjectController");
router.post("/addproject", ProjectController.addProject);
router.get("/allproject", ProjectController.allProject);
router.delete("/deleteproject", ProjectController.deleteProject);
router.put("/updateproject", ProjectController.updateProject);
router.post("/userbyempid", ProjectController.getUserByEmpId);

//Leave Routes
const LeaveController = require("../Controller/LeaveController");
router.post("/addleave", LeaveController.addLeave);
router.get("/allleave", LeaveController.allLeave);
router.delete("/deleteleave", LeaveController.deleteLeave);
router.put("/updateleave", LeaveController.updateLeave);

//Holiday Routes
const HolidayController = require("../Controller/HolidayController");
router.post("/addholiday", HolidayController.addHoliday);
router.get("/allholiday", HolidayController.allHoliday);

module.exports = router;
