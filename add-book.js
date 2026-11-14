let addBookForm = document.getElementById("addBookForm");
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookCategory = document.getElementById("bookCategory");
let message = document.getElementById("message");
addBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = bookTitle.value.trim();
    let author = bookAuthor.value.trim();
    let category = bookCategory.value.trim();
    if (title == "" || author == "" || category == "") {
        message.textContent = "Please fill all fields";
        message.style.color = "#ff5555";
        return;
    }
    let book = {
        id: Date.now(),
        title: title,
        author: author,
        category: category,
        status: "Available"
    };
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    message.textContent = "Book added successfully!";
    message.style.color = "#e5ad2f";
    addBookForm.reset();
});
