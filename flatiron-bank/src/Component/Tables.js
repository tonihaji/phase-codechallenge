import React,{useState} from "react";

function Tables({transaction}){
   const[blue,setBlue]=useState([])
   const mapData=transaction.map((current)=>{
    return  <tr key={current.id}>
               <td>{current.date}</td>
               <td>{current.description}</td>
               <td>{current.category}</td>
               <td>{current.amount}</td>  
            </tr>
   })

    return(
        <>
        <div>
            <div className="container-fluid">
                    <form onSubmit={()=>{}} className="d-flex" role="search">
                        <input  onChange={()=>{}}className="form-control me-2" type="search" placeholder="Enter description to search" aria-label="Search"/>
                    </form>
                </div>
            </div>
                <table className= "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                  {mapData}  
                </tbody>
            </table>
        </>
    )
}
export default Tables;