//Error object 

// const error = new Error("Something went wrong")
// console.log(error.stack)
// console.log(error.message)

// throw new Error("Code thik kar") --using inbuilt method


// const {customError} = require("./customError")  --using custom method by extending the Error class
// throw new customError("Bad Request")

//Try-catch 
function doSomething(){
    const data = fetch("localhost:3000/api")
}
try{
    doSomething()
}
catch(e){
    console.log(`Error: ${e}`)
}