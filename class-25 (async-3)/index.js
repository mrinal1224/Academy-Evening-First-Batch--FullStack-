function placeOrder(drink){
  return new Promise(function(resolve , reject){
      if(drink ==='coffee'){
          resolve('Order for Coffee Placed')
      }
      else{
          reject('Order cannot be Placed')
      }
  })
}


function processOrder(orderPlaced){
    return new Promise(function(resolve){
        resolve(`${orderPlaced} and Served`)
    })
}


placeOrder('coffee').then(function(orderstatus){
    console.log(orderstatus)
    return orderstatus
}).then(function(orderstatus){
    let orderIsProccessed = processOrder(orderstatus)
    // console.log(orderIsProccessed)
    return orderIsProccessed
}).then(function(orderIsProccessed){
    console.log(orderIsProccessed)
})



