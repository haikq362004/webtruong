const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alertError = document.getElementById('alertError');

    if (!username || !password) {
        alertError.textContent = 'Vui lòng điền đầy đủ thông tin!';
        alertError.style.display = 'block';
        return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'index.html';
    } else {
        alertError.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
        alertError.style.display = 'block';
    }
});