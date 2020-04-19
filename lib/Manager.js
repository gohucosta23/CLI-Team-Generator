const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(officeNumber, name, id, email, role){

        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;