 
import React,{ useState, useEffect} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Forms from './Component/Forms';
import Tables from './Component/Tables';

function App() {
  const[pot,setPot]=useState([])
  const[spot,setSpot]=useState([])

  
  useEffect ( ()=> {
    fetch ("http://localhost:3000/transactions")
    .then ((r)=> r.json ())
    .then ((data)=> setPot(data))},
    [])
    function postData(data){
      setSpot([...spot,data])
    }

  return (
    
    <div className="App">
        <Navbar/>
        <Forms addData={postData}/>
        <Tables transaction={pot}/>  
    </div>
  );
}

export default App;
