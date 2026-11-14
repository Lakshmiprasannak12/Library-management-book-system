let returnTableBody = document.getElementById("returnTableBody");
let message = document.getElementById("message");
let returnedBooks =JSON.parse(localStorage.getItem("returnedBooks")) || [];
function displayReturnedBooks() {
    returnTableBody.innerHTML = "";
    if (returnedBooks.length == 0) {
        returnTableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No returned books available.
                </td>
            </tr>
        `;
        return;
    }
    returnedBooks.forEach(function(book) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.studentName}</td>
            <td>${book.studentId}</td>
            <td>${book.issueDate}</td>
            <td class="return-date">
                ${book.returnDate}
            </td>
            <td>
                <span>Returned</span>
            </td>
        `;
        returnTableBody.appendChild(row);
    });
}
displayReturnedBooks();