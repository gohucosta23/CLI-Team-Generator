

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamMember = [];


function start(){
    
    inquirer.prompt([
        {
            message : "Enter name?",
            name : "name"
        },
        {
            message : "Enter email address?",
            name : "email"
        },
        {
            message : "Enter ID number?",
            name : "id"
        },
        {
            type : "list",
            message : "Choose a Job Title?",
            name : "jobTitle",
            choices : ["Manager", "Engineer", "Intern"]
        }
    ]).then(function(response){      
        
        const role = response.jobTitle;
       
        switch(role){

            case "Manager":

                createManager(response);
                break;

            case "Engineer":

                createEngineer(response);
                break;
            
            case "Intern":

                createIntern(response);
                break;
        }        
    });
};

    function createManager(response){
        
        inquirer.prompt([
            {
                message : "Enter office number : ",
                name : "office"
            }
        ]).then(function(answers){
            const manager = new Manager(answers.office, response.name, response.id, response.email, response.jobTitle);
            teamMember.push(manager);
            confirm();
        });
    };

    function createEngineer(response){
        inquirer.prompt([
            {
                message : "Enter Github Username : ",
                name : "github"
            }
        ]).then(function(answers){

            const engineer = new Engineer(answers.github, response.name, response.id, response.email, response.jobTitle);
            teamMember.push(engineer);
            confirm();
        });
    };

    function createIntern(response){
        
        inquirer.prompt([
            {
                message : "Enter your School name : ",
                name : "school"
            }
        ]).then(function(answers){
                    
            let intern = new Intern(answers.school, response.name, response.id, response.email, response.jobTitle);  
            teamMember.push(intern);  
            confirm();      
        
        });
    };

    function confirm(){

        inquirer.prompt([
            {
                type : "confirm",
                message : "Do you have any other team members you need to add?",
                name : "confirm",
                
            }
        ]).then(function(response){
    
            if(response.confirm){
                start();
            }
            else {

               const renderHTML = render(teamMember);

               fs.writeFile(outputPath, renderHTML, function(error){

                   if(error){
                       console.log(error);
                   }                  
               });
            }
        });
    };

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

 