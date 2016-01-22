var express = require('express');
var router = express.Router();

var multiparty = require('multiparty');
var fs = require('fs');

var dao = require('../dao/bookDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('queryAll');
});

router.get('/toadd', function(req, res, next) {
  res.render('add');
});

// 增加用户
router.post('/add', function(req, res, next) {
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public/files/'});
     //上传完成后处理
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(fields,null,2);
  
      if(err){
        console.log('parse error: ' + err);
      } else {
      // console.log('parse files: ' + filesTmp);
        var inputFile = files.file[0];
        var uploadedPath = inputFile.path;
        var dstPath = './public/files/' + inputFile.originalFilename;
        //重命名为真实文件名
        fs.rename(uploadedPath, dstPath, function(err) {
          if(err){
            console.log('rename error: ' + err);
          } else {
            //console.log('rename ok');
          }
        });
      }
      //res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
      //res.write('received upload:\n\n');
      //res.end(util.inspect({fields: fields, files: filesTmp}));
	dao.add(req, res, fields, inputFile.originalFilename, next);
   });
   res.redirect('/');
});

router.get('/download/:filename', function(req, res, next) {
	var realpath = './public/files/'+req.params.filename
	//console.log(req.params.filename)
    res.download(realpath, req.params.filename);
});

router.get('/queryAll', function(req, res, next) {
  dao.queryAll(req, res, next);
});
router.get('/search', function(req, res, next) {
  dao.search(req, res, next);
});
router.get('/query', function(req, res, next) {
  dao.queryById(req, res, next);
});

router.get('/delete', function(req, res, next) {
  dao.delete(req, res, next);
});

router.post('/update', function(req, res, next) {
  dao.update(req, res, next);
});


module.exports = router;
