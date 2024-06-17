const http = require("http");

const getReq = require("C:/Users/khars/Desktop/JS PRAC/methods/getReq.js")
const putReq = require("C:/Users/khars/Desktop/JS PRAC/methods/putReq")
const postReq = require("C:/Users/khars/Desktop/JS PRAC/methods/postReq")
const deleteReq = require("C:/Users/khars/Desktop/JS PRAC/methods/deleteReq")

require("dotenv").config();

let movies = require("C:/Users/khars/Desktop/JS PRAC/data/movies.json")

const PORT  = process.env.PORT || 5001;

const server = http.createServer((req,res) =>{
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify({title: "Not Found", message: "Route not found"}))
            res.end();
    }
    
})

server.listen(PORT, ()=>{
    console.log(`Server started on port : ${PORT}`)
})