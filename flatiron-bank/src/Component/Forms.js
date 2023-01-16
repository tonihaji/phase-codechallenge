import React, { useState } from "react";

function Forms ({addData}){
   const [entries,setEtries]=useState({
        date : "",
        description : "",
        category : "",
        amount : "",
   })
   function handleChange(e){
    const key=e.target.name
    const value=e.target.value
    setEtries({...entries,[key]:value})
   }
    function handleSubmit(e){
      e.preventDefault()
      fetch("http://localhost:3000/transactions",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body : JSON.stringify(entries)
      })
      .then(r=>r.json())
      .then(data => addData(data))

    }
    

    return(
        <>
        <form  onSubmit={handleSubmit}className="row p-3">
            <div className="col-3">
                <input  onChange={handleChange}
                       name="date" className="form-control form-control-sm" type="date" placeholder="Date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input onChange={handleChange}
                      name="description" className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"id="description"/>
            </div>
            <div className="col-3">
                <input onChange={handleChange}
                        name="category" className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input onChange={handleChange}
                        name="amount" className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
            </div>
              </form>
                 <button onClick={handleSubmit} type="button" className="btn btn-secondary btn-lg mb-4" style={{}}>Add Transactions</button>     
        </>
    )
}
export default Forms;