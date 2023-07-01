import React from 'react'


import {useState} from 'react'

function Form() {

    const [firstName , setFirstName] = useState('')


    let handleChnage =(e)=>{
        console.log(e)
        setFirstName(e.target.value)

    }


  return (
    <div>
        <h1>This is a Form</h1>
        <form>
        <label>FirstName</label>
         <input onChange={handleChnage} type='text' value={firstName}></input>
        </form>
    </div>
  )
}

export default Form