// const promise1 = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log('Async task completed')
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Task 2 executed");
//         resolve()
//     }, 2000);
// }).then(function()
// {
//     console.log("Task 2 resolved");
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "One", email: "onetwo@example.com"})
//     }, 2000);
// })

// promise3.then(function(user)
// {
//     console.log(user);
//     console.log(user["email"])
// })

// const prom4 =new Promise(function(resolve,reject){
//     setInterval(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve({username: "One", email: "onetwo@example.com"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// prom4.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((myusername)=>{
//         console.log(myusername)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("promise is resolved or rejected"))

// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error)
//         {
//             resolve({Name:"Harsha", id:"CB.EN.U4CSE21627"})
//         }
//         else{
//             reject("Error: JS issue not resolved")
//         }
//     }, 1500);
// });

// async function consumePromise5(){
//     try {
//         const response = await promise5
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// consumePromise5()

async function getallUsers()
{
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => console.log(json)).catch((error)=>{
        console.log("Fectch error")
    })
    // const data = await response.json()
    // console.log(data)
} catch (error) {
    console.log(error)
}
    
}

getallUsers()