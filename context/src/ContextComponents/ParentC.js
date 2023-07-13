import ChildrenC from './ChildrenC';

import { FamilyContext } from './FamilyContext';

import { useContext } from 'react';

const ParentC = () => {


    const parentInfo = useContext(FamilyContext)

    console.log(parentInfo)
  
  return (
    <div className="parent">
     
       <h1>{`Parent ${parentInfo.familyName}`}</h1>
       <p></p>
     <ChildrenC/> 
    </div>
  );
}

export default ParentC;