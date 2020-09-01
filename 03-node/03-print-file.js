const fs = require('fs');

const stream = fs.createReadStream('./sample.txt', { encoding: 'utf8'});
//readable stream events => open, data, end, close, error

let readCount = 0;

stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});

stream.on('end', function(){
    console.log('Thats all folks!');
    console.log('# of chunks read = ', readCount);
});

stream.on('error', function(){
    console.log('Something went wrong');
    console.log(err);
});
