import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

  
const[mode,setmode]=useState('light')
const togglemode=()=>{


if(mode==='light')
{
  setmode('dark')
  document.body.style.backgroundColor='#43668a'
}
else{
  setmode('light')
  document.body.style.backgroundColor='white'
}
}

  return (
    <div className="App" >
      <Navbar title="Navbar" mode={mode} togglemode={togglemode}/>
      <Heading name="venkatesh" mode={mode}/>
      <div className='container'>
      <TextForm title="Enter the text to analyze it ...." mode={mode}/>

      </div>
    </div>
  );
}

export default App;           // below one more way to recall the 'App' function


// export default function Abs(){
//   return (
//     <>
//     <h1>Another type to recall function</h1>
//     <App/>
//     </>
//   );
// }
