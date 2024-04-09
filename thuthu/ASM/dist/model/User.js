"use strict";
class Add {
    eval(email, password, address) {
        const emailElement = document.getElementById(email);
        const passwordElement = document.getElementById(password);
        const addressElement = document.getElementById(address);
        const emailValue = emailElement.value;
        const passwordValue = passwordElement.value;
        const addressValue = addressElement.value;
        return `${emailValue}, ${passwordValue}, ${addressValue}`;
    }
}
const submitButton = document.getElementById("submitButton");
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const addInstance = new Add();
        const result = addInstance.eval("email", "password", "address");
        console.log(result);
    });
}
else {
    console.error("Button not found");
}
