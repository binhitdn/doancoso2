import Cookies from 'js-cookie'
import { useContext, useState } from 'react';
import  { Link, Navigate ,useNavigate} from 'react-router-dom'
import { handleLoginApi } from '../../services/userService';
import { AuthToken } from '../../utils/AuthToken';
import {handleAuth } from "./../../Auth/index"
import "./scss/Login.scss"
import axios from 'axios';
import { isBuffer } from 'lodash';
function Login() {
    const navigate = useNavigate();
    const { author, setAuthor } = useContext(AuthToken);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let handleClickLoginAdmin = () => {
        Cookies.set('token', '1', { expires: 7 })
        
        setAuthor("1");
        
        navigate('/');
        console.log('Login admin');       
    }
    let handleClickLoginDoctor = () => {
        Cookies.set('token', '2', { expires: 7 })
        setAuthor("2");
        navigate('/');
        console.log('Login doctor');             
    }
    let handleOnChangeInput = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    let handleClickLogin = async() => {
        console.log("email: ", email);
        console.log("password: ", password);
        // let login = await handleLoginApi(email, password);
        // console.log("login: ", login);
      let api = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password
      })
      console.log("api: ", api.data);
      if(api.data.message == "Login success") {
        Cookies.set('tokenAuth', api.data.token, { expires: 7 })
      }
      
      if (handleAuth().roleId == "1") {
        
        
        navigate('/');
        console.log('Login admin');   
        setAuthor("1");   
      } else if (handleAuth().roleId == "2") {
        
        
        navigate('/');
        console.log('Login doctor'); 
        setAuthor("2");     
      } else if (handleAuth().roleId == "3") {
        
        
        navigate('/');
        console.log('Login patient');    
        setAuthor("3");  
      }

  }
    
    return (
        <div>
            
            <div className="form-login">
                <form>
                    <h1>Đăng nhập</h1>
  
  <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" name="email" onChange={
                            handleOnChangeInput
    }/>
    <label className="form-label" htmlFor="form2Example1" >Email address</label>
  </div>

  
  <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" name="password" onChange={
                            handleOnChangeInput
    } />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
                    <button type="button" className="btn btn-primary btn-block mb-4"
                        onClick={
                            handleClickLogin
                    }
                    >Sign in</button>

  
  <div className="text-center">
    <p>Not a member? <Link to="/register">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
                    </form>
            </div>
            {/* <button className="btn btn-primary" onClick={handleClickLoginAdmin}>
                Dang nhap voi tu cach admin
            </button>
            <button className="btn btn-primary" onClick={handleClickLoginDoctor}>
                Dang nhap voi tu cach doctor
            </button> */}
        </div>
    );
}
export default Login;