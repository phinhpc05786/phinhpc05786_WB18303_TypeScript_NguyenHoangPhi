var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("---------câu 1------------");
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var result = add(6, 3);
console.log(result);
console.log("---------câu 2------------");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
console.log("---------câu 3------------");
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = ITDepartment.createEmployee('max');
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("d1", ['max']);
it.addEmployee('Max');
it.addEmployee('Manu');
console.log("---------câu 4------------");
