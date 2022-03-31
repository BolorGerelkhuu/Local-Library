function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCheckOut = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return booksCheckOut.length;
}

const getMostCommonGenres = (books) => {
  let holderArray = [];
  books.filter((book) => holderArray.push(book.genre));
  const _NameAndCount = holderArray.reduce((object, index) => {
    if (object[index]) {
      object[index] += 1;
    } else {
      object[index] = 1;
    }
    return object;
  }, {});
  let resultArray = [];
  for (const [genre, sum] of Object.entries(_NameAndCount)) {
    resultArray.push({ name: genre, count: sum });
  }
  resultArray.sort((a, b) => b.count - a.count);
  return resultArray.slice(0, 5);
};

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}
function _getBorrowCountPerAuthor(books, author) {
  const filteredBooksBorcount = books.map((book) => {
    if (book.authorId === author.id) {
      return book.borrows.length;
    } else {
      return 0;
    }
  });
  return filteredBooksBorcount.reduce((total, book) => {
    return total + book;
  }, 0);
}

function getMostPopularAuthors(books, authors) {
  return authors
    .map((author) => {
      return {
        name: `${author.name.first} ${author.name.last}`,
        count: _getBorrowCountPerAuthor(books, author),
      };
    })
    .sort((authorA, authorB) => (authorB.count > authorA.count ? 1 : -1))
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
