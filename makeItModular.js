var firstModule = require('./firstModule')

var path = process.argv[2]
var ext = process.argv[3]

firstModule(path, ext, function(err, list){
  if(err){
    return console.log(err)
  }

  list = list.toString().split(',')
  for(i = 0; i< list.length; i++){
    console.log(list[i])
  }
})