import logo from './logo.svg';
import './App.css';
 
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

       <Navbar/>

       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
