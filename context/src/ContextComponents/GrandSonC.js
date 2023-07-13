import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const GrandSonC = () => {

  let GsInfo = useContext(FamilyContext)
    return (
      <div className="gson">
       <h1>{`GrandSon ${GsInfo.familyName}`}</h1>
       <p>{GsInfo.onlyForGrandChildren()}</p>
      </div>
    );
  }
  
  export default GrandSonC;