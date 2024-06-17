const http = require("http");

require("dotenv").config();

const PORT  = process.env.PORT || 7001;

//creating server object
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    console.log(req.url);
    res.write(JSON.stringify({title: "Sucessfull connection", message: "Connection Established"}))
    res.end();
});

server.listen(PORT, ()=>{
    console.log(`PORT running at ${PORT}`);
})