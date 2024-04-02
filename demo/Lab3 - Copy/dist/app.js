"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkStringLength(numberOfLength) {
    return (target, propertyname) => {
        const getValue = function () {
            // ...
        };
        // Định nghĩa setter
        const setValue = function (newValue) {
            // Kiểm tra độ dài chuỗi
            if (newValue.length <= numberOfLength) {
                console.log(`${propertyname} ${newValue} quá ngắn, ${propertyname} phải > ${numberOfLength} ký tự`);
            }
            else {
                console.log("Giá trị này đã được cập nhật");
            }
        };
        // Sử dụng decorator để định nghĩa property
        Object.defineProperty(target, propertyname, {
            get: getValue,
            set: setValue,
        });
    };
}
// Lớp User
class User1 {
    // Hàm khởi tạo
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    checkStringLength(7)
], User1.prototype, "password", void 0);
let user = new User1("12345", "12347567");
