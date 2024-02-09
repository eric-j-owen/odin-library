const library = [];

function Book(title, author, pages, readBool) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBool = readBool;
}

function addBookToLibrary(title, author, pages, readBool) {
    library.push(new Book(title, author, pages, readBool));
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
    const readEl = document.createElement("p");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete Book";
    const readButton = document.createElement("button");
    readButton.classList.add("read");
    readButton.textContent = "Read/Unread"

    bookEl.setAttribute("data-book-index", lastBookIndex);

    const titleNode = document.createTextNode(libraryArr[lastBookIndex].title);
    const authorNode = document.createTextNode(
        libraryArr[lastBookIndex].author
    );
    const pagesNode = document.createTextNode(libraryArr[lastBookIndex].pages);
    const readNode = document.createTextNode(libraryArr[lastBookIndex].readBool);

    titleEl.appendChild(titleNode);
    authorEl.appendChild(authorNode);
    pagesEl.appendChild(pagesNode);
    readEl.appendChild(readNode);

    bookEl.appendChild(titleEl);
    bookEl.appendChild(authorEl);
    bookEl.appendChild(pagesEl);
    bookEl.appendChild(readEl);
    bookEl.appendChild(deleteButton);
    bookEl.appendChild(readButton);

    librarySelector.appendChild(bookEl);

    deleteButton.addEventListener("click", (e) => {
        const bookElement = e.target.closest(".book");
        const bookIndex = bookElement.getAttribute("data-book-index");
        libraryArr.splice(bookIndex, 1);
        bookElement.remove();
    });

    readButton.addEventListener("click", (e) => {
        const bookElement = e.target.closest(".book");
        const bookIndex = bookElement.getAttribute("data-book-index");
        libraryArr[bookIndex].readBool = !libraryArr[bookIndex].readBool;
        readEl.textContent = libraryArr[bookIndex].readBool ? "Read" : "Unread";
    })
    
}

const bookForm = document.querySelector(".add-book");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const radioButtons = document.querySelectorAll('input[name="readBool"]');
    const selectedRadioButton = Array.from(radioButtons).find(button => button.checked);
    const readBool = selectedRadioButton ? selectedRadioButton.value : null;

    addBookToLibrary(title, author, pages, readBool);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
});
