localStorage.removeItem('currentUser');
let seconds = 0.2;
const countdownElement = document.getElementById('countdown');
const secondsElement = document.getElementById('seconds');

const countdown = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;
    secondsElement.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(countdown);
        window.location.href = 'login.html';
    }
}, 1000);