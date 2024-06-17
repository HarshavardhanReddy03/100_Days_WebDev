const crypto = require("crypto");
const requestBodyParser = require("../utils/body-parser");

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyParser(req);
            console.log("Request Body: ", body);

            body.id = crypto.randomUUID();
            console.log(body.id)
            // Initialize req.movies if it doesn't exist
            if (!req.movies) {
                console.log("False")
                req.movies = [];
            }
            console.log(`True`)
            
            req.movies.push(body);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify(body));
        } catch (error) {
            console.log(error);
            res.writeHead(400, {"Content-Type": "application/json"});
            res.end(
                JSON.stringify({
                    title: "Validation Failed",
                    message: "Request body is not valid"
                })
            );
        }
    }
};
