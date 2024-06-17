//singleton
// const tinder = new Object()

// tinder.id = 98772
// tinder.name = "Sam"

// console.log(tinder)

// const regularUser = {
//     email: "someone@gmil.com",
//     fullname: {
//         firstname: "Harsha",
//         middlename: "vardhan",
//         lastname: "Reddy"
//     }
// }

// console.log(regularUser.fullname.lastname)

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {obj1,obj2}
// const obj3 = {...obj1,...obj2}
// console.log(obj3)
//object lietrals
// const mySum = Symbol("Key1")
// const JsUser = {
//     name: "Harsha",
//     [mySum]: "Key1",
//     age: 18,
//     location: "Coimbatore",
//     email: "harsha@gmail.com",
//     lastLogin: ["27/02/24"]
// }

// console.log(JsUser)

const course ={
    coursename: "javascript",
    price:"99"
}

const{price : rate} = course
console.log(rate)