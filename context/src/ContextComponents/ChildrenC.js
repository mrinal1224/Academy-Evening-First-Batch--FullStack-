import GrandSonC from './GrandSonC';
 import GrandDaughterC from './GrandDaughterC';

import { FamilyContext } from '../ContextComponents/FamilyContext';

import { useContext } from 'react';


const ChildrenC = () => {

   let childrenInfo = useContext(FamilyContext)
  
  return (
    <div className="children">
      <h2>{`Children ${childrenInfo.familyName}`}</h2>

      


        <GrandSonC/> 
      <GrandDaughterC/> 
     
    </div>
  );
}

export default ChildrenC