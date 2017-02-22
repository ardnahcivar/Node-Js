var express = require('express');
app = express()


var flag = true;
var startTime,h,m,s;
var insTime,insh,insm,inss;
var re
app.get('/',function(req,resp){
  if(flag){
     startTime = new Date()
     h = startTime.getHours()
     m = startTime.getMinutes()
     s = startTime.getSeconds()
     flag = false;

  }
  else{
     insTime = new Date()
     insh = insTime.getHours()
     insm = insTime.getMinutes()
     inss = insTime.getSeconds()

  }
  var begin = h.toString()+":"+m.toString()+":"+s.toString()
  var remH = h - insh;
  var remM = m - insm;
  var remS = s - inss;
  var rem = remH.toString()+":"+remM.toString()+":"+remS.toString()

  resp.send(begin+"Remainig Time"+rem)
})
.listen(7130);
