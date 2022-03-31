function findAccountById(accounts, id) {
  return (found = accounts.find((account) => account.id === id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB) =>
    accountsA.name.last > accountsB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;

  for (let i = 0; i < books.length; i++) {
    let bookBorrows = books[i].borrows;
    for (let j = 0; j < bookBorrows.length; j++) {
      if (bookBorrows[j].id === account.id) {
        counter++;
      }
    }
  }
  return counter;
}
function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  books.forEach((prop) => {
    if (prop.borrows.find((key) => key.id === account.id && !key.returned)) {
      checkedOut.push(prop);
    }
  });
  checkedOut.forEach((prop) => {
    let author = authors.find((key) => key.id === prop.authorId);
    prop["author"] = author;
  });
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
