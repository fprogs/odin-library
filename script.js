let myLibrary = [];

function Book(title, author, totalPages, isRead) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.isRead = !!isRead;
}

function addBookToLibrary() {
  // do stuff here
}

function createCardElement(book) {
  const card = document.createElement("div");
  const cardContent = card.appendChild(document.createElement("div"));
  const cardFooter = card.appendChild(document.createElement("div"));
  const bookTitle = cardContent.appendChild(document.createElement("h5"));
  const bookAuthor = cardContent.appendChild(document.createElement("p"));
  const totalPages = cardContent.appendChild(document.createElement("p"));
  const checkboxDiv = cardContent.appendChild(document.createElement("div"));
  const label = checkboxDiv.appendChild(document.createElement("label"));
  const checkbox = checkboxDiv.appendChild(document.createElement("input"));
  const deleteButton = cardFooter.appendChild(document.createElement("button"));

  card.classList.add("card");
  cardContent.classList.add("card-content");
  cardFooter.classList.add("card-footer");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  totalPages.classList.add("total-pages");
  checkboxDiv.classList.add("is-read-checkbox");
  checkbox.classList.add("checkbox")
  deleteButton.classList.add("delete-book-button");
  
  const checkboxId = `checkbox-${myLibrary.length}`;
  label.setAttribute("for", checkboxId);
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", checkboxId);
  deleteButton.setAttribute("type", "button");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = `by ${book.author}`;
  totalPages.textContent = `${book.totalPages} pages`;
  label.textContent = "Read?";
  deleteButton.textContent = "Delete";
  checkbox.checked = book.isRead;

  return card;
}
