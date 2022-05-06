import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../../style/form.css"
import { useSelector, useDispatch } from "react-redux";
import { login } from '../../Redux/Login/action';

function Login(props) {
const dispatch = useDispatch();
const { error, loading, isAuthenticated } = useSelector((state) => state.user);

const [email, setEmail] = React.useState("");
const [password,setPassword] = React.useState("");

const getData =()=>{
 dispatch(login (email, password));
}

  return props.trig ? (
    ""
  ) : (
    <div>
      <form action="">
        <label htmlFor="">Email ID/Number</label>
        <br />
        <input
          type="text"
          className="form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="Password"
          className="form"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Link to={"/"}>
          <button className="reg" onClick={() => getData()}>
            LOG IN
          </button>
        </Link>
      </form>
    </div>
  ); 
}

export default Login
