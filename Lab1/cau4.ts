document.getElementById("btn")?.addEventListener("click", () => {
    let nameInput = document.querySelector("#name") as HTMLInputElement;
    let help = document.querySelector("#help");
    let nameUser = document.querySelector("#nameUser");

    if (nameInput && help && nameUser) {
        let name = nameInput.value;

        if (name.trim() === "") {
            help.innerHTML = "Dữ liệu không được trống";
            return; 
        }

        let specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        if (specialCharacters.test(name)) {
            help.innerHTML = "Không được sử dụng ký tự đặc biệt";
            return;
        }

        if (name.length === 1) {
            help.innerHTML = "Không được sử dụng chỉ một ký tự";
            return;
        }

        nameUser.innerHTML = name;
        help.innerHTML = ""; 
    }
});

function changeColor(element: HTMLElement): void {
    // Đặt màu nền của phần tử đã nhấp vào thành 'black'
    element.style.backgroundColor = 'black';

    // Xóa class 'selected' khỏi tất cả các phần tử có class 'selected'
    const selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach((el) => {
        if (el instanceof HTMLElement) {
            el.classList.remove('selected');
        }
    });

    // Thêm class 'selected' cho phần tử được click
    element.classList.add('selected');
}








