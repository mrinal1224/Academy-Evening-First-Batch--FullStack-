let myPromise = new Promise(function(resolve , reject){
  let a = 5
  let b = 4

  if(a===b){
      resolve('Yes They are Equal')
  }
  else{
      reject('No they are not equal')
      }
})


// then method
myPromise.then(function(data){
    console.log(data)
})


//catch method

myPromise.catch(function(error){
    console.log(error)
})
