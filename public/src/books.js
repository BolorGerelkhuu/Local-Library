function findAuthorById(authors, id) {
  return (authorId = authors.find((authors) => authors.id === id));
}

function findBookById(books, id) {
  return (booksId = books.find((books) => books.id === id));
}

function partitionBooksByBorrowedStatus(books) {
  // create a function to find all books that are check out
  let result = [];
  let booksCheckOut = books.filter(
    (book) => book.borrows[0].returned === false
  );
  let booksReturned = books.filter((book) => book.borrows[0].returned === true);
  result.push(booksCheckOut);
  result.push(booksReturned);
  return result;
}

function getBorrowsForBook(book, accounts) {
  const { borrows } = books;
}
function getBorrowersForBook(book, accounts) {
  // find all the accounts that check out the book
  let borrowersBook = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  });
  return borrowersBook.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
