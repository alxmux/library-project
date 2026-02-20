const myLibrary = [];
function Book(title, author, pages, read, id) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(title, author, pages, read, id) {
  let book = new Book(title, author, pages, read, id);
  return myLibrary.push(book);
}

addBookToLibrary(
  "Clean Code",
  "Robert C.Martin",
  464,
  "Read",
  crypto.randomUUID(),
);
addBookToLibrary(
  "Atomic Habits",
  "James Clear",
  320,
  "Not Read",
  crypto.randomUUID(),
);
addBookToLibrary(
  "Digital Minimalism",
  "Cal Newport",
  304,
  "Read",
  crypto.randomUUID(),
);

addBookToLibrary(
  "The Linux Command Line",
  "William Shotts",
  544,
  "Not Read",
  crypto.randomUUID(),
);

addBookToLibrary(
  "Deep Work",
  "Cal Newport",
  296,
  "Read",
  crypto.randomUUID(),
);

addBookToLibrary(
  "Clean Architecture",
  "Robert C. Martin",
  432,
  "Not Read",
  crypto.randomUUID(),
);

addBookToLibrary(
  "How Linux Works",
  "Brian Ward",
  464,
  "Not Read",
  crypto.randomUUID(),
);
let getMain = document.querySelector("main");
function arrayLooper() {
  getMain.innerHTML = "";
  myLibrary.forEach((x) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("book-container");
    getMain.appendChild(createDiv);
    createDiv.setAttribute(`data-id`, `${x.id}`);
    createDiv.innerHTML = `<h4>${x.title}</h4>
    <p>by ${x.author}</p> 
    <p>${x.pages} Pages</p> 
    <p>${x.read}</p> 
    <div>  <button class = "delete-button">Delete</button>
    <button class = "toggle-read">Read</button></div>
   `;
  });

  let getForm = document.querySelector("form");
  getForm.reset();

  deleteDom();
  readStatus();
}
arrayLooper();
const getNewBook = document.querySelector(".new-book-button");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".dialog-close");

closeDialog.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
getNewBook.addEventListener("click", () => {
  dialog.showModal();
});

function addNewBook() {
  let getusertitle = document.querySelector("#book-title").value;
  let getuserauthor = document.querySelector("#book-author").value;
  let getuserpages = document.querySelector("#book-pages").value;
  let getuserread = document.querySelector("#read-status").checked
    ? "Read"
    : "Not read";

  if (getusertitle == "" || getuserauthor == "" || getuserpages == "") {
    alert("Fill the form please");
  } else {
    return addBookToLibrary(
      getusertitle,
      getuserauthor,
      getuserpages,
      getuserread,
      self.crypto.randomUUID(),
    );
  }
}

let formSubmit = document.querySelector(".submit-button");
formSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  addNewBook();
  arrayLooper();
});

function deleteDom() {
  document.querySelectorAll(".delete-button").forEach((x) => {
    x.addEventListener("click", () => {
      let getId = x.parentElement.parentElement.dataset.id;
      let getIndex = myLibrary.indexOf(
        myLibrary.find(({ id }) => id === getId),
      );
      myLibrary.splice(getIndex, 1);
      arrayLooper();
    });
  });
}
function readStatus() {
  document.querySelectorAll(".toggle-read").forEach((x) => {
    x.addEventListener("click", () => {
      let getId = x.parentElement.parentElement.dataset.id;
      let getIndex = myLibrary.indexOf(
        myLibrary.find(({ id }) => id === getId),
      );
      if (myLibrary[getIndex].read == "Read") {
        myLibrary[getIndex].read = "Not Read";
      }else if(myLibrary[getIndex].read == "Not Read"){
        myLibrary[getIndex].read = "Read";
      }
      arrayLooper();
    });
  });
}

