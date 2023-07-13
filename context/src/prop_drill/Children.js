import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';

const Children = ({childrenInfo}) => {
  
  return (
    <div className="children">
      <h2>{`Children ${childrenInfo.familyName}`}</h2>

      


      <GrandSon grandSonInfo={childrenInfo}/>
      <GrandDaughter grandDaughterInfo={childrenInfo}/>
     
    </div>
  );
}

export default Children;