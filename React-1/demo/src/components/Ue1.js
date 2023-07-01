import React, { useEffect } from 'react'

import {useState } from 'react'

function Ue1() {

    const [count , setCount] = useState(0)
    const [text , setText] = useState('')


   let incrementCount =()=>{
        setCount(count+1)
   }

   let handleChange = (e)=>{
      setText(e.target.value)
   }

// Syntax of useEffect

// ComponentMounting and ComponenetUpdation

//   useEffect(()=>{
//      console.log('use Effect Runs')
//      document.title = `Button clicked for ${count} times`
//   })


// Only Component Mounting
//   useEffect(()=>{
//     console.log('use Effect Runs')
//     document.title = `Button clicked for ${count} times`
//  } , [])

// compoenetMounting and ComponentUpdation based on event and values
 useEffect(()=>{
    console.log('use Effect Runs')
    document.title = `Button clicked for ${count} times`
 },[count])

  console.log('Other code that gets executed')
  


  return (
    <div>
        <h1>This is my Count value : {count} </h1>
        <input onChange={handleChange} type='text' value={text}></input>
        <h2>{text}</h2>
        <button onClick={incrementCount}>Increment</button>

    </div>
  )
}

export default Ue1