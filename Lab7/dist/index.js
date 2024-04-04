import { Student } from "./model/student";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let student = new Student("phi", "phong", "sỉ");
document.body.innerHTML = greeter(student);
