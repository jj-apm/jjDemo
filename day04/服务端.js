var http=require('http');
var server=http.createServer();
server.on('request',function (req,res) {
    var url=req.url;
    if(url=="/script"){
       var show='show()';
       res.end(show)
    }else{
        res.end(404)
    }
})
server.listen(3000,function () {
    console.log("server is running")
    
})