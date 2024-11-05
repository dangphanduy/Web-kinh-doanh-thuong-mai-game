const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{   
    wrapper.classList.remove('active');
});

function saveAccountInfo() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lưu thông tin vào Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Điều hướng đến trang account.html
    window.location.href = 'menu.html';
}
