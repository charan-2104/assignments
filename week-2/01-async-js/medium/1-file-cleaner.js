const fs = require('fs')

function readFile(){
  return new Promise(function(resolve){
    fs.readFile('a.txt','UTF-8',function(err,data){
      console.log('Before : '+ data)
      let a = data.trim().replace(/\s+/g, ' ');
      fs.writeFile('a.txt',a,'UTF-8',function(err,data){
        
      })
      resolve(a)
    })
  })
}

function onDone(data){
  console.log('After : '+ data)
}

readFile().then(onDone)