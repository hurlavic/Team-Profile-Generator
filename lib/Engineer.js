const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(github){
        super(engineer, 15, engineerEmail);
        this.github = github;
    }
    getGithub(){
        console.log(`Github profile: ${this.github}`)
    }
    getRole(){
        return Engineer;
    }
}

module.exports = Engineer;