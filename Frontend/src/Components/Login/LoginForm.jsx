import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/form.css"

export const LoginForm = (props) =>{
  
    
    const [name,setName] = React.useState("");
    const [number,setNumber] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");


    const saveData =()=>{
        localStorage.clear();
        var user ={
            name,
            number,
            email,
            password
        }
        localStorage.setItem("userData",JSON.stringify(user));
        alert("Welcome! " +name);
    }
    
    return(props.trig)?(
        <div className="full">
            <div>
                    <br />
                    <label htmlFor="name">Name</label>
                    <br />
                    <input 
                    type="text" 
                    className="form"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="number">Mobile Number</label>
                    <br />
                    <input 
                    type="number" 
                    className="number"
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    />
                    <button className="btn-num">VERIFY WITH OTP</button>
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input 
                    type="text" 
                    className="form"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input 
                    type="password" 
                    className="form"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <Link to={"/"}>
                    <button className="reg" onClick={()=>saveData()}>REGISTER</button>
                    </Link>
            </div>
            <br /><br />
        </div>
        
    ):"";
}