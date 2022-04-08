import React from "react";
import { LoginForm } from "./LoginForm";
import "../../style/form.css"
import SignupForm from "./SignupForm";

export const MainLogin =(props)=>{
    const [val,setVal] = React.useState(true);
    const set=()=>{
        if(val===true){
            setVal(false)
        }
        else{
            setVal(true)
        }
    }
    return (props.trigger) ? (
        <div className="popup">
            <span className="left">
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_1X_05042022.jpg" alt="offer" className="offer" />
            </span>
            <span className="right">
                <div className="quit">
                <button onClick={()=>props.setTrigger(false)}>X</button>
                </div>
                <LoginForm trig={val} setTrig={props.setTrigger}/>
                <SignupForm trig={val} setTrig={props.setTrigger} />
                <div>
                <button className="signup" onClick={()=>set()}>Existing User? Log In</button>
            </div>
            <div>
                <center>
                <span>OR Continue with</span>
                <span><img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" className="icon"/></span>
                <span><img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" className="icon"/></span>    
                </center>
            </div>    
            </span>
        </div>
    ) : "";
}