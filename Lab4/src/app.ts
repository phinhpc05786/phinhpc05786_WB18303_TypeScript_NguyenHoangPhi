console.log("---------câu 1------------");

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const result = add(6, 3);

console.log(result);

console.log("---------câu 2------------");

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  outputName?: string;

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there - I am");

console.log(user1);

console.log("---------câu 3------------");

abstract class Department {
    static fiscalYear = 2020;

    protected employee: string[] = [];

    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employee.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}

const employee1 = ITDepartment.createEmployee('max'); 
console.log(employee1, Department.fiscalYear); 

const it = new ITDepartment("d1", ['max']);

it.addEmployee('Max');
it.addEmployee('Manu');


console.log("---------câu 4------------");
