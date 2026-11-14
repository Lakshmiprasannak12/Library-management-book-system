let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
    window.location.href = "index.html";
}
let totalBooks = document.getElementById("totalBooks");
let availableBooks = document.getElementById("availableBooks");
let issuedBooks = document.getElementById("issuedBooks");
let books = JSON.parse(localStorage.getItem("books")) || [];
let total = books.length;
let available = books.filter(function(book) {
    return book.status === "Available";
}).length;
let issued = books.filter(function(book) {
    return book.status === "Issued";
}).length;
totalBooks.textContent = total;
availableBooks.textContent = available;
issuedBooks.textContent = issued;
let dashboardBtn = document.getElementById("dashboardBtn");
if (dashboardBtn) {
    dashboardBtn.addEventListener("click", function() {
        window.location.href = "dashboard.html";
    });
}
let addBookBtn = document.getElementById("addBookBtn");
if (addBookBtn) {
    addBookBtn.addEventListener("click", function() {
        window.location.href = "add-book.html";
    });
}
let bookListBtn = document.getElementById("bookListBtn");
if (bookListBtn) {
    bookListBtn.addEventListener("click", function() {
        window.location.href = "book list.html";
    });
}
let issueBooksBtn = document.getElementById("issueBooksBtn");
if (issueBooksBtn) {
    issueBooksBtn.addEventListener("click", function() {
        window.location.href = "issue.html";
    });
}
let returnBooksBtn = document.getElementById("returnBooksBtn");
if (returnBooksBtn) {
    returnBooksBtn.addEventListener("click", function() {
        window.location.href = "return.html";
    });
}
let logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html";
    });
}