const employees = require("../employees");
const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.json(employees);
});

router.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

router.post("/", (req, res) => {
  const employeeId = employees.length + 1;
  const {name} = req.body;
  
  if(!name) {
    res.status(400)
    return;
  }

  const newEmployee = {id:employeeId, name};
  const filteredEmployees = employees.push(newEmployee);
  res.json(filteredEmployees);
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});

module.exports=router;
