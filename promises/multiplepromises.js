const promise1= Promise.resolve('Hello World');
const promise2=10;
const promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye');
})
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json).catch((err)=>console.log(err));
Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values)).catch((err)=>console.log(err));
// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected




