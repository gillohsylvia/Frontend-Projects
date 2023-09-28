const myButton = document.getElementById('myButton');
const myAnimation = document.getElementById('myDiv');

myButton.addEventListener('click', begin);

function begin() {
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if (x === 350 && y === 350) {
            clearInterval(timerId);
        } else {
            degrees++;
            x++;
            y++;
            myAnimation.style.top = x + 'px';
            myAnimation.style.left = y + 'px';
            myAnimation.style.transform = 'rotate(' + degrees + 'deg)';
        }
    }
}