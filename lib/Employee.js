// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    };

    getName(){
        console.log(`Name: ${this.name}`)
    }

    getId(){
        console.log(`Employee Id: ${this.id}`)
    }

    getEmail(){
        console.log(`Email address: ${this.email}`)
    }

    getRole(){
        console.log(`Role: ${this.name} is a staff in this company`)
        return Employee;
    }
}

module.exports = Employee;