const fs = require('fs');

try{
    const fileContents = fs.readFileSync('./sample1.txt', { encoding: 'utf8'});
    console.log(fileContents);
} catch(e){
    console.log('Something went wrong');
    console.log(e);
}

console.log('Thats all folks!');