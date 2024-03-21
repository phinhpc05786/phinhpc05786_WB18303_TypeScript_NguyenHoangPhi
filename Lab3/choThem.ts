console.log("---Câu 1----");

// ARRAY
const hobbies: string[] = ["Sports", "Cooking"];

const activeHobbies: string[] = ["Hiking"];

activeHobbies.push(...hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

console.log(activeHobbies);

console.log("---Câu 2----");

let sum = (x: number = 5, y?: number) => {
  return x + <number>y;
};
let speech = (output: any): void => {
  console.log("result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(5, 12)));

let something: void;
let nothing: never;

let throwError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

function AddandHandle(x: number, y: number, cb: (num: number) => void) {
  const result = x + y;
  cb(result);
}

AddandHandle(10, 20, (resuld) => {
  console.log(resuld);
});

// Arrow function
const double = (num: number): number => num * 2;

//So sánh: Cú pháp của arrow function ngắn gọn hơn và ngữ cảnh của this dễ hiểu hơn so với function thông thường.
// Trong arrow function, nếu chỉ có một dòng lệnh return, không cần từ khóa return. 
//Arrow function cũng không có đối số arguments, tuy nhiên, 
//trong function thông thường có thể truy cập arguments mà không cần định nghĩa trước.
// Tuy nhiên, function thông thường linh hoạt hơn trong việc truy cập arguments và có thể sử dụng như một constructor.


// Hàm trả về tổng của hai số
function sumNunber(a: number, b: number): number {
    return a + b;
}

// Hàm trả về chuỗi đảo ngược
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Định nghĩa kiểu dữ liệu cho một hàm nhận hai số và trả về một số
type MathFunction = (a: number, b: number) => number;

// Biến với kiểu  gán cho một hàm cộng hai số
const add: MathFunction = (a, b) => a + b;

// Hàm tính tổng của mảng số
function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Hàm tính tổng của một số lượng tham số không xác định
function sumVariableParams(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Hàm có tham số mặc định trả về bình phương của tham số
function square(num: number = 0): number {
    return num * num;
}

// Sử dụng tham số mặc định cho hàm tính tổng của hai số
function sumDefault(a: number, b: number = 0): number {
    return a + b;
}

// Hàm có tham số tùy chọn trả về giá trị của tham số nếu được cung cấp, ngược lại trả về giá trị mặc định
function optionalParam(num?: number): number {
    return num || 10;
}

// Sử dụng toán tử spread để tính tổng của một mảng số
function sumArraySpread(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Sử dụng toán tử spread để tính tổng của một số lượng biến đối số không xác định
function sumVariableParamsSpread(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Hàm tính tổng của một số lượng biến đối số không xác định sử dụng rest parameter
function sumRest(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Hàm không trả về giá trị 
function printMessage() {
    console.log("Thông báo từ hàm không có giá trị trả về.");
}

// Hàm không nhận tham số và không trả về giá trị
function noReturnValueFunction() {
    console.log("ko có giá trị");
    
}