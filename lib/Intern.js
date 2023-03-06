const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor (school){
        super(Brown, 16, internEmail);
        this.school = school;
    }
    getSchool(){
        console.log(`${this.intern} is a student of ${this.school}`)
    }
    getRole(){
        return Intern;
    }
}

module.exports = Intern;