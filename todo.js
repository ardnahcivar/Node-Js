var express = require('express')
var session = require('cookie-session')
var  bodyparser = require('body-parser')
var path = require('path')
var urlencodedParser = bodyparser.urlencoded({extended:false});
var app = express()

app.use(express.static(path.join(__dirname,'/public')));
app.use(session({secret:"todo"}))
.use(function(req,resp,next){
  if(typeof(req.session.todolist) == "undefined"){
    req.session.todolist = [];
  }
  next();
})



.get('/todo',function(req,resp){
  //console.log(path.join(__dirname,'/public'));
  resp.render('todo.ejs',{todolist:req.session.todolist});

})

.post('/todo/add',urlencodedParser,function(req,resp){
  if(req.body.something_todo != '' ){
    req.session.todolist.push(req.body.something_todo)
  }
  resp.redirect('/todo')
})

.get('/todo/delete/:id',function(req,resp){
  var error_msg = "TODO List is already Empty";
    if(req.params.id == ''){
      resp.render('/todo')
    }
    /*
    else if(req.session.todolist.length == 0){
      resp.render('/todo',{msg:error_msg});
    }*/
    else{
      req.session.todolist.splice(req.params.id,1);
      resp.redirect('/todo')
    }
})

.listen(8020);
