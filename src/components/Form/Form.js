
import React, { useState } from 'react';

 
const Form = () => {
    
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Company</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Website</label>
                    <input type="text" className="form-control"  />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>

        

    );
}
 
export default Form;