const http = require('http'),
    fs = require('fs'),
    path = require('path');

const server = http.createServer(function(req /* IncomingMessage */, res /* ServerResponse */){
    const resourceName = req.url === '/' ? 'index.html' : req.url ;
    const resourceFullName = path.join(__dirname, resourceName);
    if (!fs.existsSync(resourceFullName)){
        res.statusCode = 404;
        res.end();
        return;
    }
    const stream = fs.createReadStream(resourceFullName);
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end());
});

server.listen(8080);

server.on('listening', () => {
    console.log('server listening on port 8080');
});

console.log('server started....');