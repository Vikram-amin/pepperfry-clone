import React from 'react'
import "../../style/form.css"

function SignupForm(props) {
const [number, setNumber] = React.useState("");
const [password,serPassword] = React.useState("");
  return (props.trig)?"":(
    <div>
      <form action="">
          <label htmlFor="">Email ID/Number</label>
          <br />
          <input 
          type="text" 
          className="form" 
          value={number} 
          />
          <br /><br />
          <label htmlFor="">Password</label>
          <br />
          <input 
          type="Password" 
          className='form'
          value={password}/>
          <br /><br />
          <button type='submit' className='reg'>LOG IN</button>
      </form>
    </div>
  )
}

export default SignupForm
