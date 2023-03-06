const Manager = require("./__tests__/lib/Manager");
const Engineer = require("./__tests__/lib/Engineer");
const Intern = require("./__tests__/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Create an empty array to hold all employee objects
const employees = [];

function addManager(){
inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your manager's name",
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
]).then(managerAnswers =>{
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
    ]).then(employeeTypeAnswer =>{
        if (employeeTypeAnswer.employeeType === 'Engineer') {
            inquirer.prompt([
                {
                    name: 'name',
                    type: 'input',
                    message: "What is your name?",
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
            ]).then(engineerAnswers => {
                // Create a new Engineer object with the user's input and push it to the employees array
                const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                employees.push(engineer);
                // Prompt the user to add another employee or finish building the team
                addEmployee();
            });
        } else if (employeeTypeAnswer.employeeType === 'Intern') {
            inquirer.prompt([
                {                   
                    name: 'name',
                    type: 'input',
                    message: "What is your name?",
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
            ]).then(internAnswers => {
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
                    console.log(`Team profile generated at ${outputPath}`);
                }
            });
        }
    });
}

addManager();



    