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
  const bookReadContainer = cardContent.appendChild(document.createElement("div"));
  const label = bookReadContainer.appendChild(document.createElement("label"));
  const bookRead = bookReadContainer.appendChild(document.createElement("input"));
  const deleteButton = cardFooter.appendChild(document.createElement("button"));

  card.classList.add("card");
  cardContent.classList.add("card-content");
  cardFooter.classList.add("card-footer");
  bookTitle.classList.add("title");
  bookAuthor.classList.add("author");
  totalPages.classList.add("pages");
  bookReadContainer.classList.add("book-read-container");
  bookRead.classList.add("book-read");
  deleteButton.classList.add("delete-book-button");
  
  const bookReadId = `checkbox-${myLibrary.length}`;
  label.setAttribute("for", bookReadId);
  bookRead.setAttribute("type", "checkbox");
  bookRead.setAttribute("id", bookReadId);
  deleteButton.setAttribute("type", "button");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = `by ${book.author}`;
  totalPages.textContent = `${book.totalPages} pages`;
  label.textContent = "Read?";
  deleteButton.textContent = "Delete";
  bookRead.checked = book.isRead;

  return card;
}
