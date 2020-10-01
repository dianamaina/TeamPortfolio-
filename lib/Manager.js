// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor (name,id,email,gitHub){
        super(name,id,email);
        this.gitHub = gitHub
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;