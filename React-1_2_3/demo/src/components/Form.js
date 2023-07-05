import React from "react";

import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName , setLastName] = useState('')
  const [pincode , setPincode] = useState('')

  let handleFirstNameChange = (e) => {
    // console.log(e);
     setFirstName(e.target.value);
  };

  let handleLastNameChange = (e)=>{
      setLastName(e.target.value)
  }

  let handlePincode = (e)=>{
    setPincode(e.target.value)
  }

  let handleSubmit= (e)=>{
    e.preventDefault()
    console.log({
        fName : firstName,
        lName : lastName,
        pin : pincode
    })
  }

  return (
    <div>
      <h1>This is a Form</h1>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input onChange={handleFirstNameChange} type="text" value={firstName}></input>
        <input onChange={handleLastNameChange} type="text" value={lastName}></input>
        <input onChange={handlePincode} type="number" value={pincode}></input>

        <button>Submit Form Button</button>
      </form>
    </div>
  );
}

export default Form;



