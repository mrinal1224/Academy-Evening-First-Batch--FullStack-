import React , {useRef, useState} from "react";

function Ref() {
  const [name, setName] = useState("Mrinal");


  function clear(){
      setName('')
      refElement.current.focus()
  }

  function changeColor(){
      refElement.current.style.color = 'Red'
      refElement.current.style.backgroundColor = 'Blue'
  }


  const refElement = useRef('')

  console.log(refElement)

  return (
    <>
      <h1>Use Ref</h1>

      <input ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button onClick={()=> clear()}>Clear</button>
      <button onClick={()=> changeColor()}>Change Color</button>
    </>
  );
}

export default Ref;
