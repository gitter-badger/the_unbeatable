const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 1337;

fs.readFile('dist/index.html', function(err, html) {
    if (err) {
        throw err;
    }

    console.log(" Project is running at: 127.0.0.1:"+ port);

    http.createServer(function(req, res) {
        let filePath = req.url;
        if (filePath == '/')
            filePath = '/dist/index.html';

        if (filePath == '/bundle.js')
            filePath = '/dist/bundle.js';

        filePath = __dirname + filePath;
        const extname = path.extname(filePath);
        let contentType = 'text/html';

        console.log("request ", req.url)
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }

        fs.exists(filePath, function(exists) {
            if (exists) {
                fs.readFile(filePath, function(error, content) {
                    if (error) {
                        res.writeHead(500);
                        res.end();
                    } else {
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.end(content, 'utf-8');
                    }
                });
            }
        });
    }).listen(port, '127.0.0.1');
});