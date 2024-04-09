import 'bootstrap/dist/css/bootstrap.min.css';
import { IPerson } from "./model/person.interface";
import { IsEmail, IsNotEmpty, MinLength, validate } from "class-validator";

export class App implements IPerson {
    @IsEmail()
    @IsNotEmpty({ message: 'Email is required to be entered' })
    public email: string;
    @MinLength(6)
    public password: string;
    @IsNotEmpty({ message: 'Address is required to be entered' })
    public address: string;
    constructor() {
        let btn = document.getElementById('myButton') as HTMLButtonElement;
        btn.addEventListener('click', (event) => this.handleSubmit(event))
    }

    getFormData(): IPerson {
        this.email = (document.getElementById("email") as HTMLInputElement).value;
        this.password = (document.getElementById("password") as HTMLInputElement).value;
        this.address = (document.getElementById("address") as HTMLInputElement).value;

        const formData: IPerson = {
            email: this.email,
            password: this.password,
            address: this.address
        };
        return formData;
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        const formData = this.getFormData();
        const isValid = this.validateForm();
        if (isValid) {
            this.processForm(formData);
        }
    }
    processForm(formData: IPerson) {
        // gọi api post
    }
    validateForm(): boolean {
        validate(this).then(errors => {
            if (errors.length > 0) {
                console.log(errors);
                errors.forEach(error => {
                    switch (error.property) {
                        case 'email':
                            document.getElementById('re-email').innerHTML = `${error.constraints.isNotEmpty ?? ''} ${error.constraints.isEmail ?? ''}`;
                            break;
                        case 'password':
                            document.getElementById('re-password').innerHTML = `${error.constraints.isNotEmpty ?? ''} ${error.constraints.minLength ?? ''}`;
                            break;
                        case 'address':
                            document.getElementById('re-address').innerHTML = `${error.constraints.isNotEmpty ?? ''}`;
                            break;
                        default:
                            break;
                    }
                    if (error.property === 'email') {
                        document.getElementById('re-email').innerHTML = `${error.constraints.isEmail ?? ''} ${error.constraints.isNotEmpty ?? ''}`;
                    }
                })
                console.log("Lỗi:", errors.map(error => error.constraints));
                return false;
            }
        });
        return true;
    }
}
new App();