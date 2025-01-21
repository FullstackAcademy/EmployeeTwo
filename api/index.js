const express = require("express");
const router = express.Router();
const employees = require("./employees");

router.use("/employees", employees)



module.exports=router;