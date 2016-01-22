// CRUD SQL语句
var user = {
  insert:'INSERT INTO myuser(id, name, age) VALUES(0,?,?)',
  update:'update myuser set name=?, age=? where id=?',
  delete: 'delete from myuser where id=?',
  queryById: 'select * from myuser where id=?',
  queryAll: 'select * from myuser'
};

module.exports = user;