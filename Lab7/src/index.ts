import { Person} from "./model/person";
import { Student} from "./model/student";

function greeter (person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;

}

let student: Student = new Student("phi", "phong", "sỉ");

document.body.innerHTML = greeter(student);