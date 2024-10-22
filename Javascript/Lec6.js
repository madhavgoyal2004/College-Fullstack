// Async Vs Sync
// Sync (Synchronous language) : Line by line execute. problem at timing task
// JS have single thread
// console.log("hello")

// console.log("my name is madhav")
// async function name(params) {
//     function waitAsec(){
//         let curr_time = new Date().getTime();
//         let next_sec = curr_time + 1000;
    
//         while (new Date().getTime() < next_sec){}
//     }
    
//     function waitNsec(n){
//         for(let i=0; i<n; i++) waitAsec()
//     }
//     waitNsec(6);
// }




// Asynchronous Function : have two thread Main thread, second thread
// methods : SetTimeOut, SetInterval, ClearInterval, Promises, CallBack, async/await

// SetTimeOut (call fun, time delay) : execute a function with some time delay
// setTimeout(() => {
//     console.log("Inside setTimeOut function")
// }, 3000)


// SetInterval(coll fun, time Interval)
// let id = setInterval(()=>{
//     console.log("inside setInterval")
// },1000)

// clear Interval use for break the setinterval 
// setTimeout(()=>{
//     clearInterval(id);
// },8000)
// console.log("world")


//IIFE (Immediate Invoke Function Expression) : 
// ``-> backtick

// minification
// ((a,b)=>{
//     console.log(`My sum of a and b is ${a+b}`) 
// })(10,15)


//abstraction
let student = (function IIFE(){
    let marks = 75;
    let totalmarks = 90;
    function student(){
        details();
    }
    function details(){
        console.log(`percentage : ${(marks/totalmarks)*100}`);
    }
    return student;
})()

student()

//CallBack function
// use of call back : 
// Icecream shop : order -> decide Ingredients -> start Processing -> deliver/serve
// maintain the order of processes .uses the call back function

// all processes are asynchronous and give some time delay to every process 