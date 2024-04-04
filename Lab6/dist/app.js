"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("----------Bài 1------------");
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
console.log("----------Bài 2------------");
function Logger1(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person1 = __decorate([
    Logger1('LOGGING PERSON')
], Person1);
const person = new Person1();
console.log("----------Bài 3------------");
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product {
    set price(val) { }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax() { }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const product = new Product('My Product', 100);
console.log(product.title);
console.log("----------Bài 4------------");
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Product1 {
    set price1(val) { }
    constructor(t, p) {
        this.title = t;
        this._price1 = p; // Corrected variable name
    }
    getPriceWithTax() { }
}
__decorate([
    Log3
], Product1.prototype, "getPriceWithTax", null);
const product1 = new Product1('Product 1', 100);
product1.getPriceWithTax();
console.log("----------Bài 5------------");
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This word!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
