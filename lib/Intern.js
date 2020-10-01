//// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");
class Intern extends Employee {
    constructor (name,id,email,gitHub,school){
        super(name,id,email,school);
        this.gitHub = gitHub
        this.school = UCLA
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern; 
