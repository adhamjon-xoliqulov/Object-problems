const fs = require("fs");
let updated = parseInt(fs.readFileSync(0, "utf8").trim());

let calculateSalary = (employee) => (employee.experience >= 3) ? employee.salary += employee.salary * 0.2 : employee.salary


const employee = {
  name: "Vali",
  salary: 100,
  experience: null
};

let copy = Object.assign({}, employee)
copy.experience = updated

console.log(calculateSalary(copy))