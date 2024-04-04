"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("----------Bài 6------------");
const registerValidators = {};
function Required(target, propName) {
    if (!registerValidators[target.constructor.name]) {
        registerValidators[target.constructor.name] = {};
    }
    registerValidators[target.constructor.name][propName] = ['required'];
}
function PositiveNumber(target, propName) {
    if (!registerValidators[target.constructor.name]) {
        registerValidators[target.constructor.name] = {};
    }
    registerValidators[target.constructor.name][propName] = ['positive'];
}
function validate(obj) {
    const objValidatorConfig = registerValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true; // No validation config found, consider it valid
    }
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    if (!obj[prop]) {
                        return false;
                    }
                    break;
                case 'positive':
                    if (obj[prop] <= 0) {
                        return false;
                    }
                    break;
            }
        }
    }
    return true;
}
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const errorMessageDiv = document.getElementById('errorMessage');
    if (registrationForm && errorMessageDiv) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const usernameInput = document.getElementById('username');
            const ageInput = document.getElementById('age');
            const username = usernameInput.value;
            const age = parseInt(ageInput.value);
            const user = new User(username, age);
            if (validate(user)) {
                errorMessageDiv.textContent = '';
                console.log('User registration successful:', user);
            }
            else {
                errorMessageDiv.textContent = 'Please fill in all required fields and ensure age is positive.';
            }
        });
    }
});
class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
}
__decorate([
    Required
], User.prototype, "username", void 0);
__decorate([
    Required,
    PositiveNumber
], User.prototype, "age", void 0);
