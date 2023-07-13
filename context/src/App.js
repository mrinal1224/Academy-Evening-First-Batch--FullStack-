import logo from './logo.svg';
import './App.css';

import Family from './prop_drill/Family';
import FamilyC from './ContextComponents/FamilyC';

import { FamilyContext } from './ContextComponents/FamilyContext';
import Ref from './ContextComponents/Ref';


const familyInfo = {
  familyName : 'The Griffins',

  onlyForParents : ()=>{
    return 'Info for parents'
  },


  onlyForGrandChildren : ()=>{
    return 'Info for GrandChildren '
  }
}

function App() {



  return (
    <div className="App">
      {/* <FamilyContext.Provider value={familyInfo}>
    
      <FamilyC/>

      </FamilyContext.Provider> */}


       <Ref/>





    </div>
  );
}

export default App;
