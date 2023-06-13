

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

function genreateBill(processedOrder){
    return new Promise(function(resolve){
        resolve(`${processedOrder} and Bill generated with 200Rs`)
    })
}


// placeOrder('coffee').then(function(orderstatus){
//     console.log(orderstatus)
//     return orderstatus
// }).then(function(orderstatus){
//     let orderIsProccessed = processOrder(orderstatus)
//     // console.log(orderIsProccessed)
//     return orderIsProccessed
//    }).then(function(orderIsProccessed){
//     console.log(orderIsProccessed)
//     return orderIsProccessed
//       }).then(function(orderIsProccessed){
//     let BillGenerated = genreateBill(orderIsProccessed)
//     return BillGenerated
//          }).then(function(BillGenerated){
//     console.log(BillGenerated)
// }).catch(function(err){
//     console.log(err)
// })




// Async and Await 
// to use async await you need to create Functions


async function serveOrder(){
    let orderstatus = await placeOrder('coffee')
    console.log(orderstatus)
    let processedOrder = await processOrder(orderstatus)
    console.log(processedOrder)
    let generatedBill = await genreateBill(processedOrder)
    console.log(generatedBill)



}

serveOrder()





