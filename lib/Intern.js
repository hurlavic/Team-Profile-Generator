const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    };
    getSchool(){
        console.log(`${this.name} is a student of ${this.school}`)
        return this.school;
    }
    getRole(){
        return 'Intern';
    };
}

module.exports = Intern;