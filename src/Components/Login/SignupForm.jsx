import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../../style/form.css"
function SignupForm(props) {
const [number, setNumber] = React.useState("");
const [password,setPassword] = React.useState("");
const getData =()=>{
  var user = JSON.parse(localStorage.getItem('userData'));
  if(user.email===number&&user.password===password){
    alert("Welcome Back! "+ user.name);
  }
  else{
    alert("Entered Wrong Credentials!!!")
  }
}

  return (props.trig)?"":(
    <div>
      <form action="">
          <label htmlFor="">Email ID/Number</label>
          <br />
          <input 
          type="text" 
          className="form" 
          value={number}
          onChange={(e)=>setNumber(e.target.value)} 
          />
          <br /><br />
          <label htmlFor="">Password</label>
          <br />
          <input 
          type="Password" 
          className='form'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <br /><br />
          <Link to={'/'}>
          <button className='reg' onClick={()=>getData()}>LOG IN</button>
          </Link>
      </form>
    </div>
  )
}

export default SignupForm
