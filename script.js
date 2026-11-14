let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let error = document.getElementById("error");
loginBtn.addEventListener("click", login);
function login() {
    let user = username.value;
    let pass = password.value;
    if (user == "prasanna@gmail.com" && pass == "1234") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Invalid email or password";
    }
}