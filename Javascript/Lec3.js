let obj = {
    "name" : "madhusudhan",
    "age" : 55,
    "isold" : true,
    "salary" : 20
}

obj.Gender = "Male"
// console.log(obj);

let obj1 = {
    "name1" : "jharna",
    "age1" : 36,
    "isold1" : false,
    "salary1" : 21
}

let obj2 = {
    ...obj, ...obj1
}

console.log(obj2)
