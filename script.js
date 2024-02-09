const library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
    console.log(library);
}

const librarySelector = document.querySelector(".library");
const titleEl = document.createElement("h1");
const bookEl = document.createElement("div");
const titleNode = document.createTextNode("this is a title");
librarySelector.appendChild(titleNode);

const bookForm = document.querySelector(".add-book");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    addBookToLibrary(title, author, pages);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
});
