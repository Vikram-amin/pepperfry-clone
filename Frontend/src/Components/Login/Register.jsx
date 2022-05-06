import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/form.css"
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Login/action";


export const Register = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { error, loading, isAuthenticated } = useSelector((state) => state.user);
  
   const [formData, setFormData] = useState({
     name: "",
     mobileNumber: "",
     email: "",
     password: "",
   });

    const { name, mobileNumber, email, password } = formData;

      const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]:  value }); 
        
    } 

console.log(error);

    const handleSubmit = (e) => {
      e.preventDefault();
        dispatch(register(name, mobileNumber, email, password));

         if (error) {
           alert(error);
         }

         if (isAuthenticated) {
           navigate("/");
         }
    };


    
    return props.trig ? (
      <div className="full">
        <form onSubmit={handleSubmit}>
          <br />
          <label htmlFor="name">Name</label>
          <br />
          <input
            value={name}
            onChange={handleChange}
            type="text"
            className="form"
            name="name"
          />
          <br />
          <br />
          <br />
          <label htmlFor="number">Mobile Number</label>
          <br />
          <input
            value={mobileNumber}
            onChange={handleChange}
            type="number"
            name="mobileNumber"
            className="number"
          />
          <button className="btn-num">VERIFY WITH OTP</button>
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            className="form"
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            className="form"
          />
          <br />
          <br />

          <button className="reg" type="submit">
            REGISTER
          </button>
        </form>
        <br />
        <br />
      </div>
    ) : (
      ""
    );
}