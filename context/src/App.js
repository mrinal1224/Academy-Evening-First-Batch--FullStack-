import logo from './logo.svg';
import './App.css';

import Family from './prop_drill/Family';


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
       <Family info={familyInfo}/>
    </div>
  );
}

export default App;
