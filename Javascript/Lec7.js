//call back example
// Download Book  -->  unzipped  -->  Parse  -->  testing & analyzing Book  -->  upload
// Timing : 3s    -->    1s      -->    2s   -->            4s              -->     3s

// Asynchronous call : DBMS , networking etc.

function downloadBook(unzipped){
    setTimeout(()=>{
        // fetch(url);
        console.log("book downloaded");
        unzipped(parsing);
    }, 3000);

}

function unzipped(parsing){
    setTimeout(()=>{
        console.log("book unzipped");
        parsing(testBook);
    },1000);
}

function parsing(testBook){
    setTimeout(()=>{
        console.log("your book is parsed");
        testBook(upload);
    },2000);
}

function testBook(upload){
    setTimeout(()=>{
        console.log("testing and analyzing of book is completed");
        upload();
    }, 4000)
}

function upload(){
    
    setTimeout(()=>{
        console.log("book uploaded successfully");
    },3000);
}


downloadBook(unzipped);


// any piramid structure form in call back function we called call back hell

// use promises or async/await for reducing call back hell.

// Promise -: It is a container/object for future values.
// promise's state : fullfilled / resolve , Pending, reject.
// Promise's result : value , undefined, reason/Errors.

// promise have two people : creator, consumer.
// if promise is fullfilled , output come in ".then" 
// if promise is reject , output come in ".catch"
// if fullfilled then resolve function will trigger with its value, else reject function will trigger with reason/error.
