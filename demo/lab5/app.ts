class Student{
    name: string;
    age: number;
    constructor(){
        this.name = "Student",
        this.age = 1
    };

    instance(){
        console.log(this.name);     
    }

}

let student = new Student();
console.log(student.instance());
