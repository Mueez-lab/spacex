import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Intropage from './components/intropage';

function App() {
  return (
    <>
    <div className="App">
        <Nav/>
      <div className='main-page'>
        <Intropage/>
      </div>
      </div>
    </>
  );
}

export default App;
