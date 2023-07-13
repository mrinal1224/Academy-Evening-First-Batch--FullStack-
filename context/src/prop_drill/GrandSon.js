

const GrandSon = ({grandSonInfo}) => {


  return (
    <div className="gson">
     <h1>{`GrandSon ${grandSonInfo.familyName}`}</h1>
     <p>{grandSonInfo.onlyForGrandChildren()}</p>
    </div>
  );
}

export default GrandSon;