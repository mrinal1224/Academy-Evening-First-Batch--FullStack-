import React, { useMemo, useState } from 'react'

function Factorial() {

    const [number , setNumber] = useState(1)
    const [inc , setInc] = useState(0)


    const onChange = (event)=>{
        setNumber(Number(event.target.value))
    }

    const onClick = ()=>{
          setInc(i=>i+1)
    }


    const factorial = useMemo(()=>  factorialOF(number) , [number] )
  


  
  return (
    <div>
      <span>Factorial OF - </span> <input type='number' value={number} onChange={onChange}></input>
      <span>Factorial value - {factorial}  </span>

      <button onClick={onClick}>re-render</button>

    </div>
  )
}

function factorialOF(n){
    console.log('factorial function called')

    return n<=0 ? 1 : n * factorialOF(n-1)
}

export default Factorial