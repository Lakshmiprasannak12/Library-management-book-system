let issueBookForm = document.getElementById("issueBookForm");
let issueBookName = document.getElementById("issueBookName");
let studentName = document.getElementById("studentName");
let studentId = document.getElementById("studentId");
let issueDate = document.getElementById("issueDate");
let message = document.getElementById("message");
let selectedBookId = localStorage.getItem("selectedBookId");
let books = JSON.parse(localStorage.getItem("books")) || [];
let selectedBook = books.find(function(book) {
    return book.id == selectedBookId;
});
if (selectedBook) {
    issueBookName.value = selectedBook.title;
}
issueBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = studentName.value.trim();
    let id = studentId.value.trim();
    let date = issueDate.value;
    if (name == "" || id == "" || date == "") {
        message.textContent = "Please fill all fields";
        message.style.color = "#ff5555";
        return;
    }
    if (!selectedBook) {
        message.textContent = "Book not found";
        message.style.color = "#ff5555";
        return;
    }
    selectedBook.status = "Issued";
    selectedBook.studentName = name;
    selectedBook.studentId = id;
    selectedBook.issueDate = date;
    localStorage.setItem("books", JSON.stringify(books));
    message.textContent = "Book issued successfully!";
    message.style.color = "#e5ad2f";
    localStorage.removeItem("selectedBookId");
    issueBookForm.reset();
    issueBookName.value = selectedBook.title;
});