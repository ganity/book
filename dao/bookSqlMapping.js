// CRUD SQL语句
var book = {
  insert:'INSERT INTO book (bookname, author, booktype, descs, point, path, updatetime) VALUES (?, ?, ?, ?, ?, ?, NOW())',
  update:'update book set bookname=?, author=?, booktype=?, descs=?, point=?, path=?, updatetime=now() where id=?',
  delete: 'delete from book where id=?',
  queryById: 'select * from book where id=?',
  queryAll: 'select * from book limit ?,?',
  search: 'select * from book where bookname like CONCAT(CONCAT(\'%\',?,\'%\') ) limit ?,?'
};

module.exports = book;