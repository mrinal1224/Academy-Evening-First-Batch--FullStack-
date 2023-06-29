

import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div >
      <UserProfile name='Mark' age={25} occupation='Civil Engineer'/>
      <UserProfile name='John' age={35} occupation='Electornics Engineer'/>
      <UserProfile name='Steve' age={40} occupation='Bussinessman'/>
       
    </div>
  );
}

export default App;
