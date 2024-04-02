document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('reset') as HTMLElement | null;
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Load lại trang
            location.reload();
        });
    }

    const cancelButton = document.getElementById('cancel') as HTMLElement | null;
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            // Chuyển hướng đến trang login
            window.location.href = './index.html'; 
        });
    }

    const startButton = document.getElementById('start') as HTMLElement | null;
    if (startButton) {
        startButton.addEventListener('click', function() {
            startCountdown();
        });
    }

    let countdownInterval: number;

    function startCountdown() {
        const countdownDisplay = document.getElementById('countdown-display') as HTMLSpanElement | null;
        const countdownDiv = document.getElementById('countdown') as HTMLDivElement | null;
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
        const countdownDiv = document.getElementById('countdown') as HTMLDivElement | null;
        if (countdownDiv) {
            countdownDiv.style.display = 'none';
        }
    }

    const gameItems = document.querySelectorAll('.gameItem');
    const itemsArray = Array.from(gameItems);
    let selectedImages: HTMLElement[] = [];

    itemsArray.forEach(item => {
        // Ẩn hình ảnh ban đầu bằng cách thêm thuộc tính CSS display: none;
        const imgElement = item.querySelector('img');
        if (imgElement) {
            imgElement.style.display = 'none';
        }
        
        item.addEventListener('click', function() {
            if (!selectedImages.includes(item as HTMLElement)) {
                // Hiển thị hình ảnh khi người dùng nhấn vào
                showImage(item as HTMLElement);
                selectedImages.push(item as HTMLElement);
                if (selectedImages.length === 2) {
                    if (compareImages(selectedImages[0], selectedImages[1])) {
                        selectedImages.forEach(item => {
                            item.classList.add('revealed');
                        });
                        selectedImages = [];
                        
                    } else {
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

    function showImage(item: HTMLElement) {
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
    function compareImages(image1: HTMLElement, image2: HTMLElement): boolean {
        const src1 = (image1.querySelector('img') as HTMLImageElement | null)?.src;
        const src2 = (image2.querySelector('img') as HTMLImageElement | null)?.src;
        
        if (src1 === src2) {
            image1.style.backgroundColor = 'green';
            image2.style.backgroundColor = 'green';
            
            setTimeout(() => {
                showWinMessage();
            }, 1000); 
        } else {

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
