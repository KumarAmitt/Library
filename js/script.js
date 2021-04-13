
let myLibrary = []

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


document.querySelector('.form-submit').addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.querySelector('[name=title]').value;
  let author = document.querySelector('[name=author]').value;
  let pages = document.querySelector('[name=pages]').value;
  let read = document.querySelector('[name=read]').checked;

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary)

})

//
// function addBookToLibrary(){
//
// }