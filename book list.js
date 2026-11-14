let bookTableBody = document.getElementById("bookTableBody");
let noBooks = document.getElementById("noBooks");
let searchInput = document.getElementById("searchInput");
let books = JSON.parse(localStorage.getItem("books")) || [];
function displayBooks(bookArray) {
    bookTableBody.innerHTML = ""
    if (bookArray.length == 0) {
        noBooks.style.display = "block";
        return;
    }
    noBooks.style.display = "none";
    bookArray.forEach(function(book, index) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.status}</td>
            <td>
                ${
                    book.status == "Available"
                    ? `<button
                        class="issue-btn"
                        onclick="issueBook(${book.id})">
                        Issue
                       </button>`
                    : `<span class="issued-text">
                        Issued
                       </span>`
                }
            </td>
        `;
        bookTableBody.appendChild(row);
    });
}
displayBooks(books);
searchInput.addEventListener("input", function() {
    let searchText = searchInput.value.toLowerCase();
    let filteredBooks = books.filter(function(book) {
        return (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.category.toLowerCase().includes(searchText)
        );
    });
    displayBooks(filteredBooks);
});
function issueBook(bookId) {
    localStorage.setItem("selectedBookId", bookId);
    window.location.href = "issue.html";
}