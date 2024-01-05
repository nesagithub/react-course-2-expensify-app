const promise = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    // resolve({
    //   name: "Neand",
    //   age: 48
    // })
    reject('Something went wrong')
  }, 1000)
 
})

console.log('before')

promise.then((data)=>{
  console.log('1', data)
}).catch((e) => {
  console.log(e)
})

// promise.then((data)=>{
//   console.log('1', data)
// }, (e) => {
//   console.log(e)
// })


console.log('after')