 
import React,{ useState, useEffect} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Forms from './Component/Forms';
import Tables from './Component/Tables';

function App() {
  const[pot,setPot]=useState([])
  
  useEffect ( ()=> {
    fetch ("http://localhost:3000/transactions")
    .then ((r)=> r.json ())
    .then ((data)=> setPot(data))},
    [])

  return (
    
    <div className="App">
        <Navbar/>
        <Forms/>
        <Tables transaction={pot}/>  
    </div>
  );
}

export default App;
