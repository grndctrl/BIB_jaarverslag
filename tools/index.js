const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
let rl = readline.createInterface({
    input: fs.createReadStream('partners.txt')
});

let lines = []
let links = []
let labels = []

// event is emitted after each line

let lineNr = 0;

rl.on('line', function(line) {
    lines.push(line)
    let splitLine = line.split('http')
    let currLabel = splitLine[0]
    let currLink = splitLine[1]
    if (currLabel && currLink) {
      currLabel = currLabel.trim()
      currLink = currLink.trim()
    } else {
      console.log(splitLine)
    }

    links.push('http' + currLink)
    labels.push(currLabel)
});

// end
rl.on('close', function(line) {
    console.log('total lines : ' + lines.length);
    console.log('example label :: link: ' + labels[0] + ' :: ' + links[0]);
    
    let file = fs.createWriteStream('output.txt');
    file.on('error', function(err) { /* error handling */ });
    for (let index = 0; index < links.length; index++)
    { 
      let line = '<a href="' + links[index] + '" target="_blank">' + labels[index] + '</a>'
      console.log(line)
      file.write(line + '\n/\n')
    }
    file.end();
  });