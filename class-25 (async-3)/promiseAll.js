const p1 = Promise.resolve("pi");  // pi
//returns a promise of resolved value "pi"
const p2 = 3.14;  // 3.14
const p3 = new Promise((resolve, reject) => { 
    //promise method to resolve or reject values
    resolve("Maths"); 
    //p3 contains a promise of resolving "maths" value 
});

let returned_promise = Promise.all([p1 ,p2 ,p3]); 
//checking fulfillment or rejection of any of the promises: p1,p2 and p3 passed as iterable in the function 

returned_promise.then((array)=>{ 
    //returned_promise will contain final returned value of Promise.all() method
    console.log(array); 
    //checking and printing the value returned as promised by Promise.all() method in JS
})