
const myLibrary = [];
let id = 0;

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(id) {
  const title = document.querySelector('[name=title]').value;
  const author = document.querySelector('[name=author]').value;
  const pages = document.querySelector('[name=pages]').value;
  const read = document.querySelector('[name=read]').checked;

  const book = new Book(id, title, author, pages, read);
  if (validate(book)) {
    myLibrary.unshift(new Book(id, title, author, pages, read));
  } else {
    alert();
  }
}


function showBook() {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  myLibrary.forEach((b) => {
    const tableRow = `<tr>
                        <td>${b.title}</td>
                        <td>${b.author}</td>
                        <td>${b.pages}</td>
                        <td><div onclick="changeStatus(this)">${readStatus(b.read)}</div></td>
                        <td onclick="destroy(this, ${b.id})">Delete</td>
                      </tr>`;

    tableBody.innerHTML += tableRow;
  });
}

function clear() {
  document.querySelector('form').reset();
}

document.querySelector('.form-submit').addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(id++);
  showBook();
  clear();
});

function destroy(currentNode, id) {
  currentNode.parentNode.remove();
  myLibrary.splice(myLibrary.findIndex((i) => i === id), 1);
}

function changeStatus(currentNode) {
  currentNode.textContent = currentNode.textContent === '✔' ? '×' : '✔';
}

function readStatus(read) {
  return read ? '✔' : '×';
}

document.querySelector('.add-book').addEventListener('click', (e) => {
  document.querySelector('.library-form').classList.toggle('show');
});

function validate(book) {
  return !(book.title.length < 2 || book.author.length < 2 || book.pages === '');
}

function alert() {
  const target = document.querySelector('.alert');
  target.innerHTML = 'Invalid Data Submission';

  setTimeout(() => {
    target.innerHTML = '';
  }, 2000);
}
