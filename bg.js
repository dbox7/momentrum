const body = document.querySelector('body');

function showImg(num) {
    const img = new Image();
    img.src = `img/${num}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
}

function whatTime() {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 4) {
        showImg(4);
    } else if (hour >= 4 && hour < 12) {
        showImg(1);
    } else if (hour >= 12 && hour < 16) {
        showImg(2);
    } else {
        showImg(3);
    }
}

function init() {
    whatTime();
}

init();