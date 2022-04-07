import React from "react";
import "../../style/form.css"
export const LoginForm = (props) =>{
    
    const [name,setName] = React.useState("");
    const [number,setNumber] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    return(props.trig)?(
        <div className="full">
            <div>
                <form action="">
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
                    <button className="reg">REGISTER</button>
                </form>
            </div>
            <br /><br />
        </div>
        
    ):"";
}