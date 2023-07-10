const LOGIN_URL = "../html/login.html";

const logoutBtn = document.querySelectorAll('#logout');
for (let index = 0; index < logoutBtn.length; index++) {
    logoutBtn[index].addEventListener('click', function() {
        sessionStorage.removeItem('usuario');
        window.location.replace(LOGIN_URL);
    })
}