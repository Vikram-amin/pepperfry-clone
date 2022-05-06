import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/form.css"
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/Login/action";
import axios from "axios"

export const Register = (props) =>{
    const dispatch = useDispatch();
        const navigate = useNavigate();
  //  const { error, loading, isAuthenticated } = useSelector((state) => state.user);
  
   const [formData, setFormData] = useState({
        name : "",
        number : "",
        email : "",
        password : "",
    })

    const {name , number , email, password} = formData;
    const [error, setError] = useState("");
    const [data, setData] = useState([]);


        const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]:  value }); 
        
    } 

     useEffect(() => {
       getEmployesData();
     }, []);

     const getEmployesData = async () => {
       try {
         let res = await fetch(`http://localhost:3004/EmployesData`);
         let fetchdata = await res.json();
         // console.log("fetchdata", fetchdata);
         setData(fetchdata);
       } catch (err) {
         console.log(err);
       }
     };

 const handleSubmit = async (e) => {
   e.preventDefault();

    const { name, number, email, password } = formData;

    const payLoad = {
      name,
      number,
      email,
      password,
    };
    console.log(payLoad)
    const payLoadJson = JSON.stringify(payLoad);

    fetch(`http://localhost:8000/api/v1/user/register`, {
      method: "POST",
      body: payLoadJson,
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      getEmployesData();
    });

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
            value={number}
            onChange={handleChange}
            type="number"
            name="number"
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