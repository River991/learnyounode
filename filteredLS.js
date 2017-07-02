var fs = require('fs')

var path = process.argv[2]
var extension = process.argv[3]

var filteredList = []

fs.readdir(path, function callback(err, list){
  if(err){
    return console.log(err);
  }
  list = list.toString().split(',')
  for(i = 0; i < list.length; i++){
    if(list[i].endsWith("."+extension)){
      console.log(list[i])
    }
  }
});

