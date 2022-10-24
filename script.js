let myLibrary = [];

function Book(title, author, totalPages, isRead) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.isRead = !!isRead;
}

function displayForm(event) {
  const form = event.target.form;
  form.style.display = "block";
}

function hideForm(form) {
  form.reset();
  form.style.display = "none";
}

function addBookToLibrary(event) {
  event.preventDefault();
  const form = event.target;
  const bookInfo = new FormData(form);
  const book = new Book(
    bookInfo.get("title"),
    bookInfo.get("author"),
    bookInfo.get("pages"),
    bookInfo.has("isRead")
  );
  const card = createCardElement(book);
  myLibrary.push(book);
  document.querySelector(".library").appendChild(card)
  hideForm(form);
}

function cancleForm(event) {
  const form = event.target.form;
  hideForm(form);
}

function bookIsReadToggle(event) {
  const checkbox = event.target;
  const regex = /\d+$/;
  const id = checkbox.getAttribute("id");
  const index = parseInt(id.match(regex)[0]);
  myLibrary[index].isRead = !myLibrary[index].isRead;
}

function deleteBook(event) {
  const card = event.target.parentElement.parentElement;
  const checkbox = event.target.parentElement.previousElementSibling.lastElementChild.lastElementChild;
  const regex = /\d+$/;
  const id = checkbox.getAttribute("id");
  const index = parseInt(id.match(regex)[0]);
  myLibrary.splice(index, 1);
  for (let i = index; i < myLibrary.length; i++) {
    myLibrary[i].checkbox.setAttribute("id", `checkbox-${i}`);
  }
  card.remove();
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

  bookRead.addEventListener("change", bookIsReadToggle);
  deleteButton.addEventListener("click", deleteBook);

  book.checkbox = bookRead;

  return card;
}

const newBookButton = document.querySelector("#new-book-button");
const form = document.querySelector("#add-book-form");
const cancelButton = document.querySelector("#cancle-button");
newBookButton.addEventListener("click", displayForm);
form.addEventListener("submit", addBookToLibrary);
cancelButton.addEventListener("click", cancleForm);
