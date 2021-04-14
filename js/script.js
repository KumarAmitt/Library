
let myLibrary = []
let id = 0;

function Book(id, title, author, pages, read){
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(id){
  let title = document.querySelector('[name=title]').value;
  let author = document.querySelector('[name=author]').value;
  let pages = document.querySelector('[name=pages]').value;
  let read = document.querySelector('[name=read]').checked;

  myLibrary.unshift(new Book(id, title, author, pages, read))
  // console.log(myLibrary)
}


function showBook(){
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  myLibrary.forEach((b) => {
    const tableRow = `<tr>
                        <td>${b.title}</td>
                        <td>${b.author}</td>
                        <td>${b.pages}</td>
                        <td><div class="box" onclick="changeStatus(this)">${readStatus(b.read)}</div></td>
                        <td onclick="destroy(this, ${b.id})">Delete</td>
                      </tr>`;

    tableBody.innerHTML += tableRow;
  });
}

function clear(){
  document.querySelector('form').reset();
}

document.querySelector('.form-submit').addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(id++);
  showBook();
})

function destroy(currentNode, id){
  currentNode.parentNode.remove()
  myLibrary.splice(myLibrary.findIndex(i => i === id), 1);
}

function changeStatus(currentNode) {
  currentNode.textContent = currentNode.textContent === '✔' ? '×' : '✔'
}

function readStatus(read){
  return read ? '✔' : '×'
}








