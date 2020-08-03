'use strict'

function onInit() {
    renderBooks(gBooks);
}


function renderBooks() {
    var books = getBooks()
    var strHTML = '<table border="1"><tbody><tr><th>ID</th><th>Title</th><th>Price</th><th>Actions</th></tr>';
    books.forEach(function (book) {

        strHTML += `<tr><td class="${book.Id}">${book.Id}</td><td>${book.Title}</td><td>${book.Price}</td><td>
                <button class="button-read" onclick="onReadBook('${book.Id}')">Read</button></td>
                <td><button class="button-update" onclick="onUpdateBook('${book.Id}', prompt('Please enter the new price'))">Update</button></td>
                <td><button class="button-delete" onclick="onRemoveBook('${book.Id}')">Delete</button></td></tr>`
    })
    strHTML += '</tbody></table>';
    document.querySelector('.book-list').innerHTML = strHTML

}


function onAddBook() {
    var elBookName = document.querySelector('.book-name')
    var bookName = elBookName.value;
    var elBookPrice = document.querySelector('.book-price')
    var bookPrice = elBookPrice.value;
    addBook(bookName, bookPrice)
    renderBooks() 
    elBookName.value = ''
    elBookPrice.value = ''
    document.querySelector('.add-book-input').hidden = true
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks() 
}

function onUpdateBook(bookId, bookPrice) {
    updateBook(bookId, bookPrice)                    
    renderBooks() 
}

function onReadBook(bookId) {
    var index = gBooks.findIndex(function (book) {
        return bookId === book.Id
    })
    var elModal = document.querySelector('.book-modal')
    elModal.hidden = false
    elModal.querySelector('h2').innerHTML = gBooks[index].Title
    elModal.querySelector('.img').innerHTML = `<img class="cover-img" src="img/${gBooks[index].Title}.jpg" alt="Book cover">`
    renderBooks() 
}

function onCloseModal() {
    document.querySelector('.book-modal').hidden = true
}

function onOpenForm() {
    var elAddBook = document.querySelector('.add-book-input')
    elAddBook.hidden = !elAddBook.hidden; //great way to create toggle
}

function onNextPage() {
    goNextPage()
    renderBooks()
}

// function onPreviousPage() {
//     goPreviousPage()
//     renderBooks()
// }