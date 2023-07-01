import React from "react";

import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");

  let handleChnage = (e) => {
    // console.log(e);
     setFirstName(e.target.value);
  };


  let handleSubmit= (e)=>{
    e.preventDefault()
    console.log(firstName)
  }




  return (
    <div>
      <h1>This is a Form</h1>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input onChange={handleChnage} type="text" value={firstName}></input>

        <button>Submit Form Button</button>
      </form>
    </div>
  );
}

export default Form;
