const http=require('http');
const port=8000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(404,{'Content-Type': 'text/html'})
    
    // switch(req.url){
    //     case '/about':res.end("<h1>About page</h1>");
    //     break;
    //     case '/login':res.end("<h1>login page</h1>");
    //     break;
    //     default:res.end("404 errror");
    // }
  

});

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`listening on port http://localhost:${port}`);
})

