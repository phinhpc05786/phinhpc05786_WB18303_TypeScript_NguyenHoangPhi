interface User {
    eval(email: string, password: string, address: string): string;
}

class Add implements User {
    eval(email: string, password: string, address: string): string {
        const emailElement = document.getElementById(email) as HTMLInputElement;
        const passwordElement = document.getElementById(password) as HTMLInputElement;
        const addressElement = document.getElementById(address) as HTMLInputElement;

        const emailValue = emailElement.value;
        const passwordValue = passwordElement.value;
        const addressValue = addressElement.value;

        return `${emailValue}, ${passwordValue}, ${addressValue}`;
    }
}

const submitButton = document.getElementById("submitButton");
if (submitButton) {
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const addInstance = new Add();
        const result = addInstance.eval("email", "password", "address");
        console.log(result);
    });
} else {
    console.error("Button not found");
}