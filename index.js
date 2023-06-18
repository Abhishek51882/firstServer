const http=require('http');
const fs=require('fs');
const port=8000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(404,{'Content-Type': 'text/html'})
    fs.readFile("home.html",(err, data)=>{
        if(err){
           return res.end("Sorry");
            
        }
        res.end(data);

    })


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

