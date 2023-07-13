

const GrandDaughter = ({grandDaughterInfo}) => {
  
  return (    
    <div className="gdaughter">
     <h1>{`GrandDaughter ${grandDaughterInfo.familyName}`}</h1>
     <p>{grandDaughterInfo.onlyForGrandChildren()}</p>
    </div>
  );
}

export default GrandDaughter;