
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
       <NavBar/>
       <Banner/> 
       <Movies/>
    </>
 
  );
}

export default App;
