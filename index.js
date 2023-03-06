const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Create an empty array to hold all employee objects
const employees = [];

function buildTeamProfile(){
inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your manager's name",
        validate: (managerAnswers) => {
            if (managerAnswers === ""){
                return "Please enter your first and last Name";
            }else{
                return true;
            }
        }
    },
    {
        name: "id",
        type: "input",
        message: "Please enter your manager's ID",
    },
    {
        name: "email",
        type: "input",
        message: "What is your manager's email address?",
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is your manager office number?",
    },
]).then((managerAnswers) => {
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    employees.push(manager);
    addEmployee();
})
}

// Define a function to prompt the user to add an engineer or intern or finish building the team
function addEmployee() {
    inquirer.prompt([
        {
            name: 'Role',
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building the team'],
        },
    ]).then((employeeTypeAnswer) =>{
        if (employeeTypeAnswer.Role === 'Engineer') {
            inquirer.prompt([
                {
                    name: 'name',
                    type: 'input',
                    message: "What is your name?",
                    validate: (employeeTypeAnswer) => {
                        if (employeeTypeAnswer === ""){
                            return "Please enter your first and last Name";
                        }else{
                            return true;
                        }
                    }
                },
                {                    
                    name: 'id',
                    type: 'input',
                    message: "What is your employee ID?",
                },
                {                    
                    name: 'email',
                    type: 'input',
                    message: "What is your email address?",
                },
                {                    
                    name: 'github',
                    type: 'input',
                    message: "What is the your GitHub username?",
                },
            ]).then((engineerAnswers) => {
                // Create a new Engineer object with the user's input and push it to the employees array
                const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                employees.push(engineer);
                // Prompt the user to add another employee or finish building the team
                addEmployee();
            });
        } else if (employeeTypeAnswer.Role === 'Intern') {
            inquirer.prompt([
                {                   
                    name: 'name',
                    type: 'input',
                    message: "What is your name?",
                    validate: (employeeTypeAnswer) => {
                        if (employeeTypeAnswer === ""){
                            return "Please enter your first and last Name";
                        }else{
                            return true;
                        }
                    }
                },
                {                   
                    name: 'id',
                    type: 'input',
                    message: "What is your employee ID?",
                },
                {                   
                    name: 'email',
                    type: 'input',
                    message: "What is your email address?",
                },
                {                   
                    name: 'school',
                    type: 'input',
                    message: "What is your school name?",
                },
            ]).then((internAnswers) => {
                // Create a new Intern object with the user's input and push it to the employees array
                const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                employees.push(intern);
                // Prompt the user to add another employee or finish building the team
                addEmployee();
            });
        } else {
            // If the user chooses to finish building the team, generate the HTML and write it to a file
            const html = render(employees);
            const outputPath = './output/team.html';
            fs.writeFile(outputPath, html, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Team profile succesfully generated! Pls check ${outputPath}`);
                }
            });
        }
    });
}


buildTeamProfile();



    