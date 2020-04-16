const Employee = require("../lib/Employee");

class Intern extends Employee{

    constructor(school, name , id, email, role){  

        super(name, id, email, role); 
        this.school = school;
              
    }
    
    getSchool(){
        return this.school;
    }
    
}

module.exports = Intern;