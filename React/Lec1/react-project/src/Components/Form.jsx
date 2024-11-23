import React, { useState } from 'react'
import Home from './Home';

export default function Form() {

    let[formData, setFormData] = useState({
        firstname : "madhav",
        lastname : "goyal", 
        age: 20,
        address: "Mathura"
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }
  return (
    <>
    <form onSubmit={(e) =>{handleSubmit(e)}}>
  <div className="mb-3">
    <label htmlFor="firstname" className="form-label">
      First Name
    </label>
    <input
      type="text"
      className="form-control"
      id="firstname"
      value={formData.firstname}
      onChange={(event)=>{
          // event.preventDefault()
        setFormData({...formData, firstname:event.target.value})
    }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="lastname" className="form-label">
      Last Name
    </label>
    <input
      type="text"
      className="form-control"
      id="lastname"
      value={formData.lastname}
      onChange={(event)=>{
          // event.preventDefault()
          setFormData({...formData, lastname:event.target.value})
        }}
        />
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">
      Age
    </label>
    <input type="number" className="form-control" id="age" 
    value={formData.age}
    onChange={(event)=>{
        // event.preventDefault()
        setFormData({...formData, age:event.target.value})
    }}/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">
      Address
    </label>
    <input type="text" className="form-control" id="address"
    value={formData.address}
    onChange={(event)=>{
        // event.preventDefault()
    setFormData({...formData, address:event.target.value})
}} />

  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


    <Home data = {formData} />
    </>
  )
}
