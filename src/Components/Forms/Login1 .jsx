import  React, { useState } from 'react';
import './Login1.css';


export default function Login1() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [pw,setpw] = useState('')
    const Submit = () => {
        console.log(name,email,pw);

    }     
  return (
    <div>
        <form className='w-50 mx-auto mt-5'>
        <div className="mb-3">
  <input type="text" value={name} onChange={(e)=> {
                     setname(e.target.value)
  } } className="form-control text-center" id="exampleFormControlInput1" placeholder="Enter Your Name">
         
  </input>
</div>
<div className="mb-3 ">
  <input type="email"  value={email} onChange={(e)=> {
                     setemail(e.target.value)
  } }   className="form-control  text-center" id="exampleFormControlInput1" placeholder="Enter Your Email">
  </input>
</div>
<div className="mb-3 ">
  <input type="Password"  value={pw} onChange={(e)=> {
                     setpw(e.target.value)
  } }   className="form-control  text-center" id="exampleFormControlInput1" placeholder="Enter Your Password"></input>
</div>
<div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{pw}</h2>



    <button onClick={Submit}>Submit</button>
</div>
</form>
    </div>
  )
}

