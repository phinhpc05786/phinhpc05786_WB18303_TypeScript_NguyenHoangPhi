class Department {
    public name: string;
    static id: string;
    private employees: string[]= [];
    constructor(n: string, a: string) {
    this.name = n;
    // this.id = a;
  }
  // describe(this: Department) {
  //   console.log("Deparment", this.name);
  // }

  // addEmployee(employee: string){
  //   if(this.name == 'phi'){
  //     return;
  //   }
  //   this.employees.push(employee);
  
  // }

  // printEmployeeInformation(){
  //   this.employees.forEach(employee => console.log(employee));
  // }
}

Department.id = "12345";
console.log(Department.id);

// console.log(Department.name);


const accounting = new Department("Accounting", "ACC001");

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

