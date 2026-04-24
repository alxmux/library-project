# Library App

A simple JavaScript library management application that allows users to add, remove, and update books dynamically in the browser. This project focuses on practicing object-oriented programming and DOM manipulation using modern JavaScript.

---

## Features

- Add new books with title, author, and page count  
- Mark books as read or not read  
- Delete books from the library  
- Dynamic rendering of book list  
- Unique ID assigned to each book  

---

## What I Learned

- Refactored constructor functions into ES6 class syntax  
- Understood how class methods replace prototype methods  
- Learned how JavaScript classes enforce the use of `new`  
- Improved understanding of object-oriented programming concepts  
- Managed application state using arrays of objects  
- Strengthened DOM manipulation skills  
- Handled user input using forms and events  
- Used unique identifiers (`crypto.randomUUID`) for tracking objects  
- Practiced feature-based development using Git branches  

---

## Skills Gained

- Writing cleaner and more maintainable JavaScript using classes  
- Refactoring existing code without changing functionality  
- Working with arrays and object methods effectively  
- Implementing CRUD operations (Create, Read, Update, Delete)  
- Handling DOM updates dynamically  
- Using Git for version control (branching, committing, merging)  
- Debugging and improving existing code structure  

---

## Tech Stack

- HTML  
- CSS  
- JavaScript (ES6+)  

---

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

## Refactor Highlight

The project was originally built using constructor functions and later refactored to use ES6 classes.

### Before (Constructor Function)

```js
function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}
```

### After (Class Syntax)

```js
class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }

  toggleRead() {
    this.read = !this.read;
  }
}
```

---

## How to Run

1. Clone the repository  
2. Open `index.html` in your browser  

---

## Future Improvements

- Store data in localStorage  
- Add edit functionality for books  
- Improve UI/UX design  
- Implement modular JavaScript structure  