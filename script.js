const library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addBookToLibrary() {
    let title = prompt("Enter the title of the book: ");
    let author = prompt("Enter the author of the book: ");
    let pages = prompt("Enter the number of pages in the book: ");
    library.push(new Book(title, author, pages));
}

addBookToLibrary();
console.log(library);
