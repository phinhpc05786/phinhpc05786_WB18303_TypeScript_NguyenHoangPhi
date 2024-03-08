console.log("----------Câu 1-----------");

console.log("-1.1");
let number1: number = 5;
let number2: number = 2.6;
let phrase: string = "result is ";
let permit: boolean = true;

const result: number = number1 + number2;
if(permit){
    console.log(phrase + result);
} else {
    console.log('not show result');
    
}


// console.log("-1.2");
// function add(x=5){
//     let phrase : string = 'result is ';
//     phrase = 10;
//     x = '2.8';
//     return phrase + x;
// }

// let result: number = add();

console.log("-1.3");

const student: object = {
    name: 'John',
    age: 34
}as const;

console.log(student);

// Tạo thêm mảng chuỗi, tạo thêm mảng object
let hobbies: string[] = ['Sports', 'Cooking'];

hobbies.forEach((element: string) => {
    console.log(element.length);
});


// console.log("----------Câu 2-----------");

// console.log("-2.1");

// enum Role {ADMIN, READ_ONLY, AUTHOR};
// const person : {
//     name: String,
//     age: Number,
//     hobbies: string[],
//     role: Role.ADMIN,
//     roletuple: (2, author)
// }

// let favo: any[];
// if(person.role === Role.AUTHOR){
//     console.log(' Is author ');
// }

// person.roletuple.push('admin');
// person.roletuple[1] = 10;
// person.roletuple = [0, 'admin', 'user'];


// console.log("-2.2");
// type Combinable = number | string;

// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: "as-number" | "as-text"
// ): Combinable {

//   let result;

//   if (
//     typeof input1 === "number" &&
//     typeof input2 === "number" ||
//     resultConversion === "as-number"
//   ) {
//     result = parseFloat(input1) + parseFloat(input2);
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// const combineNumber = combine(30, 26, "as-number");
// console.log(combineNumber); 

// const combineStringNumber = combine("30", "26", "as-number");
// console.log(combineStringNumber); 

// const combineText = combine("Typescript vs ", "Javascript", "as-text");
// console.log(combineText); 