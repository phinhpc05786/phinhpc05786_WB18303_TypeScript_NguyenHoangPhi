"use strict";
// Ví dụ sau cho thấy class decorator được chạy 1 lần lúc gặp khai báo class,
// không chạy khi tạo các đối tượng.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ThunCungEx(constructor) {
    console.log("Ham  class");
}
let ThunCung = class ThunCung {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
};
ThunCung = __decorate([
    ThunCungEx
], ThunCung);
// Ví dụ: Thêm thuộc tính vào class dùng class decorator
function BaseHV(constructor) {
    constructor.prototype.phai = true;
    constructor.prototype.ngaytao = new Date().toLocaleString("vi");
}
let HocVien = class HocVien {
    constructor(ht) {
        this.ht = ht;
    }
};
HocVien = __decorate([
    BaseHV
], HocVien);
let hv1 = new HocVien(" Phi nè");
console.log(hv1);
//Ví dụ: Dùng class decorator để return class mới mở rộng class
// hiện tại với các thuộc tính bổ sung
function themTT(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.mauxe = "red";
        }
    };
}
let XeMay = class XeMay {
    constructor(tx, gia) {
        this.tx = tx;
        this.gia = gia;
    }
};
XeMay = __decorate([
    themTT
], XeMay);
const x1 = new XeMay("Vision 125", 39.5);
console.log(x1, x1["mauxe"]);
// Ví dụ: dùng class decorator đổi nội dung class
function ChangeHS(constructor) {
    return class {
        constructor(h) {
            this.name = h;
            this.job = true;
        }
    };
}
let HocSinh = class HocSinh {
    constructor(h) {
        this.hoten = h;
    }
};
HocSinh = __decorate([
    ChangeHS
], HocSinh);
// let u1 = new HocSinh{"phi phi"};
// console.log(u1);
//Ví dụ: Sử dụng kết hợp nhiều class decorator
function BaseUser1(constructor) {
    console.log(`day la ham`);
}
function BaseUser2(constructor) {
    console.log(`day la ham `);
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    BaseUser1,
    BaseUser2
], User);
let a1 = new User("Luom");
console.log(a1);
// Bai vidu
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//
function PetLogger(constructor) {
    console.log("Day la PetLogger");
}
