const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(office, name, id, email, role){

        super(name, id, email, role);
        this.office = office;
    }
    getOfficeNumber(){
        return this.office;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;