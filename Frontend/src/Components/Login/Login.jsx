import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../../style/form.css"
import { useSelector, useDispatch } from "react-redux";
import { login } from '../../Redux/Login/action';


function Login(props) {
const dispatch = useDispatch();
const navigate = useNavigate();


const { error, loading, isAuthenticated } = useSelector((state) => state.user);

const [email, setEmail] = React.useState("");
const [password,setPassword] = React.useState("");


const getData =(e)=>{
    e.preventDefault();
 dispatch(login (email, password));

}

  useEffect(() => {
 
  }, [dispatch]);

      //  if (isAuthenticated) {
      //    navigate("/");
      //  }

   if (error) {
     alert(error);
   }

  return props.trig ? (
    ""
  ) : (
    <div>
      <form onSubmit={(e) => getData(e)}>
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

        <input className="reg" type="submit" value="LOG IN" />
      </form>
    </div>
  ); 
}

export default Login
