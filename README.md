# book
book manage by nodejs

change the mysql config in conf/db.js
module.exports = {
  mysql: {
    host: '10.16.41.37', 
    user: 'root',
    password: 'root',
    database:'test', 
    port: 3306
  }
};

and you can run by the commit
forever start -o logs/out.log -e logs/err.log ./bin/www 
