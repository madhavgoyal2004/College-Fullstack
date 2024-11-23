// Execution Context -> It is an support System to run your js File.
// In support system : Call Stack , Browser Engine , Web APIs
// 3types of EC : GEC (Global Execution Context), FEC (Function Execution Context), Eval(It is used to Evaluate numerical Expression in String form)
// when file is load on browser then GEC produce, 1 file 1 GEC exist, 
// GEC -> have 2 phases -> Creation phase, Execution phase.
// In creation allocate the memory to variable and function,  undefined value assign to variable.
// In Execution value intialization is performed, 
// If any function is come in execution then FEC call and make an creation and execution complete then return the answer or print.
// GEC Table in excel "see in javascript.exc"

// let a = 10;
// let b = 20;
// function sum(a,b){
//     return a+b;
// }

// let result = sum (a,b);


// Closure
// In closure func1() return func2 and lexical scope(parent scope)
//IIFE (Immediatly invoke function)
function func1(d){
    let a = 10;
    let b = 20;
    function func2(e){
        let c = 30;
        function func3(f){
            return a+b+c + d + e+f;
        }
        return func3;
    }
    return func2;
}

let returnedValue = func1(20)(30)(40);

console.log(returnedValue);


//Make an arrow function
function func4(d){
    let a = 10;
    let b = 20;
    return ((e)=>{
        let c = 40;
        return ((f)=>{
            return a+b+c+d+e+f;
        })
    })
}

let rv = func4(50)()()

console.log(rv)