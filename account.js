document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    document.getElementById('username').textContent = username ? username : 'không có';
    document.getElementById('email').textContent = email ? email : 'không có';
});
function clearAccountInfo() {
localStorage.removeItem('username');
localStorage.removeItem('email');

displayAccountInfo();
alert("Dữ liệu đã được xóa!");
}
display();