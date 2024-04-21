const myLibrary = [
    { title: '"The Catcher in the Rye"', author: 'J.D. Salinger', pages: 224, read: true },

    { title: '"The Great Gatsby"', author: 'F. Scott Fitzgerald', pages: 180, read: false },

    { title: '"To Kill a Mockingbird"', author: 'Harper Lee', pages: 336, read: false }
];

const emptyDisplayMessage = document.querySelector('.empty-display-message');
const content = document.querySelector('.content');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === true) {
            return `The ${title} by ${author}, ${pages} pages, already read`
        } else {
            return `The ${title} by ${author}, ${pages} pages, not read yet`
        };
    };
};

function addBookToLibrary (userTitle, userAuthor, userPages, userRead) {
    const addedBook = new Book(userTitle, userAuthor, userPages, userRead);
    myLibrary.unshift(addedBook);
};

function displayBooks () {
    for (element of myLibrary) {
        const card = document.createElement('div');
        card.classList.toggle('card');
        const paraTitle = document.createElement('p');
        const paraAuthor = document.createElement('p');
        const paraPages = document.createElement('p');
        const paraRead = document.createElement('p');

        paraTitle.textContent = element.title;
        paraAuthor.textContent = element.author;
        paraPages.textContent = `${element.pages} pages`;
        if (element.read === true) {
            paraRead.textContent = 'Read';
        } else if (element.read === false) {
            paraRead.textContent = 'Not read yet';
        }

        card.appendChild(paraTitle);
        card.appendChild(paraAuthor);
        card.appendChild(paraPages);
        card.appendChild(paraRead);
        content.appendChild(card);
    }
    if (myLibrary[0].title !== undefined) {
        emptyDisplayMessage.style.display = 'none';
    };
};

displayBooks ();