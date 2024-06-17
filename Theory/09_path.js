const path = require("path")
// const filePath = "Theory/sample.txt"
// //dirname
// console.log(path.dirname(filePath))
// console.log(path.basename(filePath))
// console.log(path.extname(filePath))
// console.log(__dirname)
// console.log(__filename)

// //path join
// sampleFile = "bulbul.txt"
// console.log(path.join(path.dirname(filePath), sampleFile))

//file-system module

const fs = require("fs")
// console.log(fs)
// const path = "C:/Users/khars/Desktop/JS PRAC/Theory/sample.txt"
// fs.readFile(path, "utf-8", (err, data)=>{
//     if(err) throw new Error(err);
//     console.log(data)
// })

// const path1 = __dirname
// console.log(path1)
// const path2 = path.join(path1,"sample.txt")
// console.log(path2)
// try{
//     const readData = fs.readFileSync(path.join(__dirname,"sample.txt"), "utf-8")
//     console.log(readData)
// }catch(err){
//     console.log(err);
// }

const promise = require("fs/promises")

// const fileReading = async() => {
//     try{
//         const data =  await promise.readFile(path.join(__dirname,"sample.txt"),"utf-8")
//         console.log (data)
//     }catch(err){
//         console.log(err)
//     }
// };

// fileReading()

//write file

// fs.writeFile(path.join(__dirname,"sample.txt"),"I LOVE NODE.JS",(err)=>{
//     if(err) throw new Error("Something went wrong");
//     console.log("Write operation success")
// })
