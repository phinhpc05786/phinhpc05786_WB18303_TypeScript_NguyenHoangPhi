var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'bootstrap/dist/css/bootstrap.min.css';
import { IsEmail, IsNotEmpty, MinLength, validate } from "class-validator";
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        var btn = document.getElementById('myButton');
        btn.addEventListener('click', function (event) { return _this.handleSubmit(event); });
    }
    App.prototype.getFormData = function () {
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        this.address = document.getElementById("address").value;
        var formData = {
            email: this.email,
            password: this.password,
            address: this.address
        };
        return formData;
    };
    App.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var formData = this.getFormData();
        var isValid = this.validateForm();
        if (isValid) {
            this.processForm(formData);
        }
    };
    App.prototype.processForm = function (formData) {
        // gọi api post
    };
    App.prototype.validateForm = function () {
        validate(this).then(function (errors) {
            if (errors.length > 0) {
                console.log(errors);
                errors.forEach(function (error) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    switch (error.property) {
                        case 'email':
                            document.getElementById('re-email').innerHTML = "".concat((_a = error.constraints.isNotEmpty) !== null && _a !== void 0 ? _a : '', " ").concat((_b = error.constraints.isEmail) !== null && _b !== void 0 ? _b : '');
                            break;
                        case 'password':
                            document.getElementById('re-password').innerHTML = "".concat((_c = error.constraints.isNotEmpty) !== null && _c !== void 0 ? _c : '', " ").concat((_d = error.constraints.minLength) !== null && _d !== void 0 ? _d : '');
                            break;
                        case 'address':
                            document.getElementById('re-address').innerHTML = "".concat((_e = error.constraints.isNotEmpty) !== null && _e !== void 0 ? _e : '');
                            break;
                        default:
                            break;
                    }
                    if (error.property === 'email') {
                        document.getElementById('re-email').innerHTML = "".concat((_f = error.constraints.isEmail) !== null && _f !== void 0 ? _f : '', " ").concat((_g = error.constraints.isNotEmpty) !== null && _g !== void 0 ? _g : '');
                    }
                });
                console.log("Lỗi:", errors.map(function (error) { return error.constraints; }));
                return false;
            }
        });
        return true;
    };
    __decorate([
        IsEmail(),
        IsNotEmpty({ message: 'Email is required to be entered' })
    ], App.prototype, "email", void 0);
    __decorate([
        MinLength(6)
    ], App.prototype, "password", void 0);
    __decorate([
        IsNotEmpty({ message: 'Address is required to be entered' })
    ], App.prototype, "address", void 0);
    return App;
}());
export { App };
new App();
