var _a;
(_a = document.getElementById("btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var nameInput = document.querySelector("#name");
    var help = document.querySelector("#help");
    var nameUser = document.querySelector("#nameUser");
    if (nameInput && help && nameUser) {
        var name_1 = nameInput.value;
        if (name_1.trim() === "") {
            help.innerHTML = "Dữ liệu không được trống";
            return;
        }
        var specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        if (specialCharacters.test(name_1)) {
            help.innerHTML = "Không được sử dụng ký tự đặc biệt";
            return;
        }
        if (name_1.length === 1) {
            help.innerHTML = "Không được sử dụng chỉ một ký tự";
            return;
        }
        nameUser.innerHTML = name_1;
        help.innerHTML = "";
    }
});
function changeColor(element) {
    // Đặt màu nền của phần tử đã nhấp vào thành 'black'
    element.style.backgroundColor = 'black';
    // Xóa class 'selected' khỏi tất cả các phần tử có class 'selected'
    var selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach(function (el) {
        if (el instanceof HTMLElement) {
            el.classList.remove('selected');
        }
    });
    // Thêm class 'selected' cho phần tử được click
    element.classList.add('selected');
}
