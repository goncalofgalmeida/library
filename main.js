const myLibrary = [
    {
        title: 'lorem', author: 'ipsum', pages: 30, read: true,
    }
];
const cards = document.querySelectorAll('.card');
const displayTitle = document.querySelector('.display-title');
const displayAuthor = document.querySelector('.display-author');
const displayPages = document.querySelector('.display-pages');
const displayRead = document.querySelector('.display-read');
const emptyDisplayMessage = document.querySelector('.empty-display-message');

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
        }
    }
};

function addBookToLibrary (userTitle, userAuthor, userPages, userRead) {
    const addedBook = new Book(userTitle, userAuthor, userPages, userRead);
    myLibrary.push(addedBook);
};

function displayBooks () {
    for (element of myLibrary) {
        if (element.title !== undefined) {
            emptyDisplayMessage.textContent = '';
        }
        displayTitle.textContent = element.title;
        displayAuthor.textContent = element.author;
        displayPages.textContent = element.pages;
        displayRead.textContent = element.read;
    }
};

displayBooks ()

/* const userTitle = 'lorem';
const userAuthor = 'lorem';
const userPages = 10;
const userRead = true;
addBookToLibrary ('lorem', 'lorem', 10, true)
displayBooks ()
*/