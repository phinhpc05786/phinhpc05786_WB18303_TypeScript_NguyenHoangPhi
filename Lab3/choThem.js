console.log("---Câu 1----");
// ARRAY
var hobbies = ["Sports", "Cooking"];
var activeHobbies = ["Hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
console.log("---Câu 2----");
var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var speech = function (output) {
    console.log("result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(5, 12)));
var something;
var nothing;
var throwError = function (errorMsg) {
    throw new Error(errorMsg);
};
function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (resuld) {
    console.log(resuld);
});
// Arrow function
var double = function (num) { return num * 2; };
//So sánh: Cú pháp của arrow function ngắn gọn hơn và ngữ cảnh của this dễ hiểu hơn so với function thông thường.
// Trong arrow function, nếu chỉ có một dòng lệnh return, không cần từ khóa return. 
//Arrow function cũng không có đối số arguments, tuy nhiên, 
//trong function thông thường có thể truy cập arguments mà không cần định nghĩa trước.
// Tuy nhiên, function thông thường linh hoạt hơn trong việc truy cập arguments và có thể sử dụng như một constructor.
// Hàm trả về tổng của hai số
function sumNunber(a, b) {
    return a + b;
}
// Hàm trả về chuỗi đảo ngược
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Biến với kiểu  gán cho một hàm cộng hai số
var add = function (a, b) { return a + b; };
// Hàm tính tổng của mảng số
function sumArray(arr) {
    return arr.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Hàm tính tổng của một số lượng tham số không xác định
function sumVariableParams() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Hàm có tham số mặc định trả về bình phương của tham số
function square(num) {
    if (num === void 0) { num = 0; }
    return num * num;
}
// Sử dụng tham số mặc định cho hàm tính tổng của hai số
function sumDefault(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
// Hàm có tham số tùy chọn trả về giá trị của tham số nếu được cung cấp, ngược lại trả về giá trị mặc định
function optionalParam(num) {
    return num || 10;
}
// Sử dụng toán tử spread để tính tổng của một mảng số
function sumArraySpread() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Sử dụng toán tử spread để tính tổng của một số lượng biến đối số không xác định
function sumVariableParamsSpread() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Hàm tính tổng của một số lượng biến đối số không xác định sử dụng rest parameter
function sumRest() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Hàm không trả về giá trị 
function printMessage() {
    console.log("Thông báo từ hàm không có giá trị trả về.");
}
// Hàm không nhận tham số và không trả về giá trị
function noReturnValueFunction() {
    console.log("ko có giá trị");
}
