"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.getElementById('reset');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            // Load lại trang
            location.reload();
        });
    }
    const cancelButton = document.getElementById('cancel');
    if (cancelButton) {
        cancelButton.addEventListener('click', function () {
            // Chuyển hướng đến trang login
            window.location.href = './index.html';
        });
    }
    const startButton = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', function () {
            startCountdown();
        });
    }
    let countdownInterval;
    function startCountdown() {
        const countdownDisplay = document.getElementById('countdown-display');
        const countdownDiv = document.getElementById('countdown');
        if (countdownDisplay && countdownDiv) {
            countdownDiv.style.display = 'block';
            let secondsLeft = 10 * 60; // 10 phút
            function updateCountdown() {
                if (countdownDisplay) {
                    const minutes = Math.floor(secondsLeft / 60);
                    const seconds = secondsLeft % 60;
                    countdownDisplay.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                    secondsLeft--;
                    if (secondsLeft < 0) {
                        clearInterval(countdownInterval);
                        if (countdownDiv) {
                            countdownDiv.style.display = 'none';
                        }
                    }
                }
            }
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
        }
    }
    function stopCountdown() {
        clearInterval(countdownInterval);
        const countdownDiv = document.getElementById('countdown');
        if (countdownDiv) {
            countdownDiv.style.display = 'none';
        }
    }
    const gameItems = document.querySelectorAll('.gameItem');
    const itemsArray = Array.from(gameItems);
    let selectedImages = [];
    itemsArray.forEach(item => {
        // Ẩn hình ảnh ban đầu bằng cách thêm thuộc tính CSS display: none;
        const imgElement = item.querySelector('img');
        if (imgElement) {
            imgElement.style.display = 'none';
        }
        item.addEventListener('click', function () {
            if (!selectedImages.includes(item)) {
                // Hiển thị hình ảnh khi người dùng nhấn vào
                showImage(item);
                selectedImages.push(item);
                if (selectedImages.length === 2) {
                    if (compareImages(selectedImages[0], selectedImages[1])) {
                        selectedImages.forEach(item => {
                            item.classList.add('revealed');
                        });
                        selectedImages = [];
                    }
                    else {
                        setTimeout(() => {
                            selectedImages.forEach(item => {
                                item.classList.remove('revealed');
                            });
                            selectedImages = [];
                        }, 1000);
                    }
                }
            }
        });
    });
    function showImage(item) {
        const imgElement = item.querySelector('img');
        if (imgElement) {
            imgElement.style.display = 'block';
        }
    }
    function showWinMessage() {
        // Hiển thị thông báo chiến thắng
        alert('Bạn đã chiến thắng!');
        // Load lại trang sau khi hiển thị thông báo
        location.reload();
    }
    function compareImages(image1, image2) {
        var _a, _b;
        const src1 = (_a = image1.querySelector('img')) === null || _a === void 0 ? void 0 : _a.src;
        const src2 = (_b = image2.querySelector('img')) === null || _b === void 0 ? void 0 : _b.src;
        if (src1 === src2) {
            image1.style.backgroundColor = 'green';
            image2.style.backgroundColor = 'green';
            setTimeout(() => {
                showWinMessage();
            }, 1000);
        }
        else {
            image1.style.backgroundColor = 'red';
            image2.style.backgroundColor = 'red';
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
        return src1 === src2;
    }
    function resetGame() {
        const revealedItems = document.querySelectorAll('.revealed');
        revealedItems.forEach(item => {
            item.classList.remove('revealed');
        });
    }
    function cancelGame() {
        selectedImages.forEach(item => {
            item.classList.remove('revealed');
        });
        selectedImages = [];
    }
});
