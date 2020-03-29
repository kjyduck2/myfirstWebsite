let http = require('http');
let url = require('url');

let website = http.createServer(function(request, response){
    let rqurl = request.url;
    let query = url.parse(rqurl, true).query;
    let pathname = url.parse(rqurl, true).pathname;

    if(pathname === '/'){
        
    }
    else{
        response.writeHead(404);
        response.end("Wrong site");
    }
});

website.listen(80);