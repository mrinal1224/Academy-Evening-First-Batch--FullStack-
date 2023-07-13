import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";
const GrandDaughterC = () => {
  const GdInfo = useContext(FamilyContext)

    return (    
      <div className="gdaughter">
       <h1>{`GrandDaughter ${GdInfo.familyName}`}</h1>
       <p>{GdInfo.onlyForGrandChildren()}</p>
      </div>
    );
  }
  
  export default GrandDaughterC;