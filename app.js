

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamMember = []

function start(){
    
    inquirer.prompt([
        {
            message : "What is your name?",
            name : "name"
        },
        {
            message : "What is your email address?",
            name : "email"
        },
        {
            message : "What is your ID number?",
            name : "id"
        },
        {
            message : "What is your Job Role?",
            name : "jobTitle"
        }
    ]).then(function(response){
        
        let role = response.jobTitle;
        teamMember.push(response.name, response.id, response.email);
        console.log(teamMember);
        if (role === "manager" || role === "Manager"){            
            createManager(response);           
        }
        else if(role === "engineer" || role === "Engineer"){
            createEngineer();
        }
        else if(role === "intern" || role === "Intern"){
            createIntern();
        }
    });
}

function confirm(){

    inquirer.prompt([
        {
            message : "Do you have any other team members you need to add?",
            name : "confirm",
            default : "no"
        }
    ]).then(function(response){

        if(response.confirm === "yes"){
           return start()
        }
        else {
            return;
        }
    })
}
    function createManager(response){

        
        inquirer.prompt([
            {
                message : "What is your office number? ",
                name : "office"
            }
        ]).then(function(response){
            const manager = new Manager(response.office);
            confirm();
        })
    }

    function createEngineer(response){
        inquirer.prompt([
            {
                message : "What is your Github Username ? ",
                name : "Github"
            }
        ]).then(function(response){

            const engineer = new Engineer(response.school);
            confirm();
        })
    }

    function createIntern(response){
        
        inquirer.prompt([
            {
                message : "Which school do you go to ? ",
                name : "school"
            }
        ]).then(function(response){

            const intern = new Intern(response.school);
            confirm();
        })
    }

start();



















    

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

 