const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(officeNumber){
        super(Ayo, 17, managerEmail);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return Manager;
    }
}

module.exports = Manager;