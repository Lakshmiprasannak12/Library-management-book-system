let returnBookForm = document.getElementById("returnBookForm");
let returnBookName = document.getElementById("returnBookName");
let returnStudentName = document.getElementById("returnStudentName");
let returnStudentId = document.getElementById("returnStudentId");
let returnIssueDate = document.getElementById("returnIssueDate");
let returnDate = document.getElementById("returnDate");
let message = document.getElementById("message");
let books = JSON.parse(localStorage.getItem("books")) || [];
let issuedBook = books.find(function(book) {
    return book.status == "Issued";
});
if (issuedBook) {
    returnBookName.value = issuedBook.title;
    returnStudentName.value = issuedBook.studentName;
    returnStudentId.value = issuedBook.studentId;
    returnIssueDate.value = issuedBook.issueDate;
}
returnBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let selectedReturnDate = returnDate.value;
    if (selectedReturnDate == "") {
        message.textContent = "Please select return date";
        message.style.color = "#ff5555";
        return;
    }
    if (!issuedBook) {
        message.textContent = "No issued book found";
        message.style.color = "#ff5555";
        return;
    }
    let returnedBook = {
        id: issuedBook.id,
        title: issuedBook.title,
        studentName: issuedBook.studentName,
        studentId: issuedBook.studentId,
        issueDate: issuedBook.issueDate,
        returnDate: selectedReturnDate
    };
    let returnedBooks =JSON.parse(localStorage.getItem("returnedBooks")) || [];
    returnedBooks.push(returnedBook);
    localStorage.setItem("returnedBooks", JSON.stringify(returnedBooks)
    );
    issuedBook.status = "Available";
    issuedBook.returnDate = selectedReturnDate;
    localStorage.setItem("books",JSON.stringify(books));
    window.location.href = "returntable.html";
});