var fs = require('fs')

var path = process.argv[2]
var buffer = fs.readFileSync(path, "utf8")
var lines = buffer.split('\n')

console.log(lines.length-1)