// React is a library, and make by facebook(meta)
// why should we use react -> single page application, -> fast and optimize, (compare between angular, vue, react) -> other (install everything), -> In react (install only those packages which are needed)
// react light weight
// component based => function => use of component -> code reusbility
// DOM Manipulation is handled by react itself. -> work on Bussiness Logic

//Bundle manages -> webpack, vite

//web pack -> cmd Line tool
// work of web pack :
//=> Bundling -> you have a file of HTML, CSS, JS, Image, SVG -> bundle multiple file in a single file to load into browser faster. 
//=> Transpiling -> convert new JS code into older JS -> ex - babel
// => Asset Management -> manage audio file, svg, images etc., not any code file.
// => Code Splitting -> 1500 line of code -> divide into chunk (chunk - 100 line of code)

// 'Vite' => Understand Modern Js, fast and optimized from web pack. -> use also a TypeScript




// Lec 2

// React state manages -> current dynamic data of any component.
// dynamic data -> which change with time or action. or Local data

// tool -> use to manage the dynamic data.
// Due to real and virtual DOM . normal method not update 
//  Tools -> useState(), ContextAPI(), RTK(Redux tool kit), Recoil, Zustland
// last 3 tools are 3rd party packages. Use for complex application.

// useState is a function , It have Array of 2 size, 1st is value and 2nd is function
// add set of any variable then it makes a function like setcount.
// if you use multiple setcount(count+1) it run only one time. it is a asynchronous function. that's why its ouput late to update.
// I want first update then you go ahead.
// if you want to update in previous value use call back function.



// Lec 3
// make a form (firstname, lastname, age, address)
// every event always contain call back function
// we use spread operator in setformdata function, then wee add firstname in our object.
// when you use to event call tha callback function