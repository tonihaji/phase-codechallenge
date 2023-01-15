import React from "react";

function Forms (){
    return(
        <>
        <form className="row p-3">
            <div className="col-3">
                <input name="date" className="form-control form-control-sm" type="date" placeholder="date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="date" className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="date" className="form-control form-control-sm" type="number" placeholder="category" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="date" className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
            </div>
        </form>
            <button type="button" className="btn btn-secondary btn-lg mb-4" style={{}}>Add Transactions</button>     
        </>
    )
}
export default Forms;