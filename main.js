class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function() {
            if (status === true) {
                return `The ${title} by ${author}, ${pages} pages, already read`
            } else {
                return `The ${title} by ${author}, ${pages} pages, not read yet`
            };
        };
    }
};

class Library {
    constructor() {
        this.books = [
            { title: '"The Catcher in the Rye"', author: 'J.D. Salinger', pages: 224, status: "read" },
            { title: '"The Great Gatsby"', author: 'F. Scott Fitzgerald', pages: 180, status: "not read yet" },
            { title: '"To Kill a Mockingbird"', author: 'Harper Lee', pages: 336, status: "currently reading" }
        ];
    }

    addBook(title, author, pages, status) {
        const book = new Book(title, author, pages, status);
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
}

class ScreenController {
    constructor(library) {
        this.library = library;
        this.getPageElements();
    }

    getPageElements() {
        this.emptyDisplayMessage = document.querySelector('.empty-display-message');
        this.cardsContainer = document.querySelector('.cards-container');
        this.form = document.querySelector('#add-book-form');
        this.submitButton = document.querySelector('#submit-button');
        this.formTitle = document.querySelector('#form-title');
        this.formAuthor = document.querySelector('#form-author');
        this.formPages = document.querySelector('#form-pages');
        this.formStatus = document.querySelector('#select');
    }

    formSubmission() {
        const title = this.formTitle.value;
        const author = this.formAuthor.value;
        const pages = this.formPages.value;
        const status = this.formStatus.value;

        this.library.addBook(title, author, pages, status);
        this.formTitle.value = "";
        this.formAuthor.value = "";
        this.formPages.value = "";
        this.formStatus.value = "";
    }

    // add displayBooks() function here

    removeAllCards() {
        while (this.cardsContainer.lastChild) {
            this.cardsContainer.removeChild(this.cardsContainer.lastElementChild);
        }
    }
}

function displayBooks () {
    removeAllCards ();
    for (element of myLibrary) {
        const card = document.createElement('div');
        card.classList.toggle('card');
        const paraTitle = document.createElement('p');
        const paraAuthor = document.createElement('p');
        const paraPages = document.createElement('p');
        const paraStatus = document.createElement('p');

        paraTitle.textContent = element.title;
        paraAuthor.textContent = element.author;
        paraPages.textContent = `${element.pages} pages`;
        if (element.status === true) {
            paraStatus.textContent = 'Read';
        } else if (element.status === false) {
            paraStatus.textContent = 'Not read yet';
        }

        card.appendChild(paraTitle);
        card.appendChild(paraAuthor);
        card.appendChild(paraPages);
        card.appendChild(paraStatus);
        cardsContainer.appendChild(card);
    }
    if (myLibrary[0] !== undefined) {
        emptyDisplayMessage.style.display = 'none';
    };
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    formSubmission();
});