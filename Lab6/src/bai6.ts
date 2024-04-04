console.log("----------Bài 6------------");

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}

const registerValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    if (!registerValidators[target.constructor.name]) {
        registerValidators[target.constructor.name] = {};
    }
    registerValidators[target.constructor.name][propName] = ['required'];
}

function PositiveNumber(target: any, propName: string) {
    if (!registerValidators[target.constructor.name]) {
        registerValidators[target.constructor.name] = {};
    }
    registerValidators[target.constructor.name][propName] = ['positive'];
}

function validate(obj: any) {
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

            const usernameInput = <HTMLInputElement>document.getElementById('username');
            const ageInput = <HTMLInputElement>document.getElementById('age');

            const username = usernameInput.value;
            const age = parseInt(ageInput.value);

            const user = new User(username, age);

            if (validate(user)) {
                errorMessageDiv.textContent = ''; 
                console.log('User registration successful:', user);
            } else {
                errorMessageDiv.textContent = 'Please fill in all required fields and ensure age is positive.';
            }
        });
    }
});

class User {
    @Required
    username: string;

    @Required
    @PositiveNumber
    age: number;

    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }
}



