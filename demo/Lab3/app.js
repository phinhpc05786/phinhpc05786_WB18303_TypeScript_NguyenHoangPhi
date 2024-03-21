var Department = /** @class */ (function () {
    function Department(n, a) {
        this.employees = [];
        this.name = n;
        // this.id = a;
    }
    return Department;
}());
Department.id = "12345";
console.log(Department.id);
// console.log(Department.name);
var accounting = new Department("Accounting", "ACC001");
// accounting.describe();
// // accounting.name = "phi";
// accounting.addEmployee("phi");
// const accountingCopy = {
//     name: "Dummy",
//     describe: accounting.describe
// };
// class ITDepartment extends Department{
//   admins: string[];
//   constructor(id: string, admins: string[]){
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// class WebDepartment extends ITDepartment {
// }
// class SoftwareDepartment extends ITDepartment {
// }
// class GameDepartment extends ITDepartment {
// }
