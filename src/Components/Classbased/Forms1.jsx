import React, { Component } from 'react'

export default class Forms1 extends Component {
   state = {
    Name :'',
    Email: '',
    Password :''

   }
   handleclick = () => {
    console.log(this.state.Name, this.state.Email, this.state.Password);
    
   }

  render() {
    return (
      <div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control w-25 text-center  mx-auto " id="exampleFormControlInput1" placeholder="enter " onChange={(e) =>{
    this.setState({Name: e.target.value})
}}></input>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email </label>
<input type="email" class="form-control w-25 text-center  mx-auto " id="exampleFormControlInput1" placeholder="enter email" onChange={(e) =>{
    this.setState({Email: e.target.value})
}}></input>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Password</label>
<input type="password" class="form-control w-25 text-center  mx-auto " id="exampleFormControlInput1" placeholder="enter password" onChange={(e) =>{
    this.setState({Password: e.target.value})
}}></input>
</div>
   <button className=''>Submit</button>



      </div>
    )
  }
}
