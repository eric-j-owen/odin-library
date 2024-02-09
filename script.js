const library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
    displayBook(library);
}

function displayBook(libraryArr) {
    lastBookIndex = libraryArr.length - 1;

    const librarySelector = document.querySelector(".library");
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");
    const titleEl = document.createElement("p");
    const authorEl = document.createElement("p");
    const pagesEl = document.createElement("p");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";

    bookEl.setAttribute("data-book-index", lastBookIndex);

    const titleNode = document.createTextNode(libraryArr[lastBookIndex].title);
    const authorNode = document.createTextNode(
        libraryArr[lastBookIndex].author
    );
    const pagesNode = document.createTextNode(libraryArr[lastBookIndex].pages);

    titleEl.appendChild(titleNode);
    authorEl.appendChild(authorNode);
    pagesEl.appendChild(pagesNode);

    bookEl.appendChild(titleEl);
    bookEl.appendChild(authorEl);
    bookEl.appendChild(pagesEl);
    bookEl.appendChild(deleteButton);

    librarySelector.appendChild(bookEl);
    deleteButton.addEventListener("click", (e) => {
        const bookElement = e.target.closest(".book");
        const bookIndex = bookElement.getAttribute("data-book-index");
        libraryArr.splice(bookIndex, 1);
        bookElement.remove();
    });
}

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
