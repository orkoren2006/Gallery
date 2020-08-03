'use strict'

const KEY = 'books'
const PAGE_SIZE = 5;
var gPageIdx = 0;

var gBooks = [
    {Id: makeId(), Title: 'Learning Laravel', Price: 18.90},
    {Id: makeId(), Title: 'Beginning with Laravel', Price: 6.65},
    {Id: makeId(), Title: 'Java for developers', Price: 7.2}
     
];

_createBooks()

function getBooks() {
    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}

function addBook(name, price) {
    var book = {
        Id: makeId(), 
        Title: name,
        Price: price
    }

    gBooks.unshift(book);
    _saveBooksToStorage()
  
}

function removeBook(bookId) {
    var index = gBooks.findIndex(function (book) {
        return bookId === book.Id
        
    })
    gBooks.splice(index, 1)
    _saveBooksToStorage()
   
}

function updateBook(bookId, bookPrice) {
    var index = gBooks.findIndex(function (book) {
        return bookId === book.Id  
})
    gBooks[index].Price = bookPrice
    _saveBooksToStorage()
};


function _createBooks() {

    var books = loadFromStorage(KEY)
    gBooks = books;
    _saveBooksToStorage()
}


function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function goNextPage() {
    var pageCount = gBooks.length / PAGE_SIZE;
    gPageIdx = (gPageIdx+1 < pageCount)? gPageIdx+1 : 0
}

// function goPreviousPage() {
//     var pageCount = gBooks.length / PAGE_SIZE;
//     gPageIdx = (gPageIdx+1 > pageCount)? gPageIdx-1 : gPageIdx
// }