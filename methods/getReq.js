module.exports = (req,res) => {
    let baseURL =  req.url.substring(0,req.url.lastIndexOf("/")+1);
    console.log(baseURL)
    let id = req.url.split("/")[3];

    console.log(id)
    if(req.url === "/api/movies"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type": "application/json"})
        res.write(JSON.stringify({title : "Not Found",message: "Route not found"}));
        res.end();
    }
}