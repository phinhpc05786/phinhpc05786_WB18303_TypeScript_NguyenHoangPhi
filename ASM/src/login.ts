document.addEventListener('DOMContentLoaded', function() {
    // Hàm xử lý khi người dùng click vào nút "Play game" trên trang login
    function handlePlayGameClick(): void {
        window.location.href = '/game.html'; // Chuyển hướng đến trang board khi người dùng click vào nút "Play game"
    }

    // Hàm kiểm tra tính hợp lệ của tên người chơi
    function isValidUsername(username: string): boolean {
        return username.length > 1 && !hasSpecialCharacters(username);
    }

    // Hàm kiểm tra xem tên người chơi có chứa ký tự đặc biệt hay không
    function hasSpecialCharacters(username: string): boolean {
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return specialCharacters.test(username);
    }

    // Hàm xử lý khi người dùng gửi form
    function handleFormSubmit(event: Event): void {
        event.preventDefault(); // Ngăn chặn việc gửi form mặc định

        const form = document.getElementById('playerForm') as HTMLFormElement;
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const helpText = document.getElementById('helpId') as HTMLElement;

        // Lấy giá trị của trường nhập tên người chơi
        const username: string = usernameInput.value.trim();

        // Kiểm tra tính hợp lệ của tên người chơi
        if (!isValidUsername(username)) {
            // Hiển thị thông báo lỗi nếu tên không hợp lệ
            helpText.textContent = 'Tên người dùng không được để trống, chứa các ký tự đặc biệt hoặc là một ký tự đơn.';
            helpText.classList.remove('invisible'); // Hiển thị thông báo lỗi
            usernameInput.classList.add('is-invalid'); // Đánh dấu trường nhập là không hợp lệ
        } else {
            // Nếu tên hợp lệ, có thể thực hiện các hành động tiếp theo ở đây, ví dụ: chuyển hướng đến trang board
            handlePlayGameClick();
        }
    }

    // Gán sự kiện submit cho form
    const form = document.getElementById('playerForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

});
