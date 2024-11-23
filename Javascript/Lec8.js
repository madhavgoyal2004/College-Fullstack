// promise code 
// creator function -> create a promise
function sum(a,b){
    return new Promise((resolve, reject) => {
        if(a + b > 50){
            resolve(a+b)
        } else {
            reject("sum of a and b is less than 50")
        }
    })
}


// consumer function 
// sum(40,15).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

// console.log(sum())

// promise contain only one resolve and reject
// use multiple .then in one promise
// .catch only use one time in one promise.
// after resolve the promise , when you return some modified data they pass the new promise with modified data.


function person(){
    return new Promise((resolve, reject) => {
        let person = {
            name : "absef",
            age : 21,
            salary : 50000
        }

        if(person.name == 'absef'){
            resolve(person)
        }
        else {
            reject("name is not autorized");
        }
    })
}

// person().then((res)=>{
//     console.log(res);
//     res.name = "klhsdf"
//     return res
// }).then((newres) => {
//     console.log(newres);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("always run");
// })



//.finally use to destroy or clean all objects.



// let p = new Promise((resolve, reject) => {
//     resolve("hello")
// })

// // use async for make a asynchronous output
// async function prom(){
//     try {
//         let output = await p;
//         console.log(output);
//         console.log("world");
//     } catch (error) {
        
//     }
// }

// prom()


// Assignment

function downloadBook(){
    return new Promise((resolve, reject)=>{
        resolve();
        reject();
    })
}

downloadBook().then(()=>{
    setTimeout(()=>{
        console.log("book downloaded");
    },3000)
}).then(()=>{
    setTimeout(()=>{
        console.log("book unzipped");
    },1000)
}).then(()=>{
    setTimeout(()=>{
        console.log("your book is parsed");
    },2000)
}).then(()=>{
    setTimeout(()=>{
        console.log("testing and analyzing of book is completed");
    },4000)
}).then(() => {
    setTimeout(()=>{
        console.log("book uploaded successfully");
    },3000)
}).catch((err)=>{
    console.log("finish");
})