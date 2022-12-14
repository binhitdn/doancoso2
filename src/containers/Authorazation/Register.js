import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleCreateUserApi } from "../../services/userService";
import { AuthToken } from "../../utils/AuthToken";
import {handleGetAllCode} from "./../../services/systemService"
import "./scss/Register.scss"
function Register() {
    const navigate = useNavigate();
    const { author, setAuthor } = useContext(AuthToken);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [genderSelect, setGenderSelect] = useState([]);
    const [radioChecked, setRadioChecked] = useState(false);





    let handleGetData = async () => {
        let data = await handleGetAllCode("GENDER");
        setGenderSelect(data.data.data);
    }
    useEffect(() => {

        handleGetData();
    }, [])

    let handleOnChangeInput = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value); 
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "rePassword") {
            setRePassword(e.target.value);
        } else if (e.target.name === "firstName") {
            setFirstName(e.target.value);
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value);
        } else if (e.target.name === "phoneNumber") {
            setPhone(e.target.value);
        } else if (e.target.name === "address") {
            setAddress(e.target.value);
        } else if (e.target.name === "gender") {
            setGender(e.target.value);
        }
    }

    let handleRegister = async() => {
        let data = {
            email: email,
            password: password,
            rePassword: rePassword,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            gender: gender,
            role: 'R3'
        }
        if(validate()) {
            let res = await handleCreateUserApi(data);
            console.log(res)
            toast.success("Register success. Please login to continue");
            setAuthor("patient");
            navigate('/login');


        }  
    }
    let validate = () => {
      
        if (email === "") {
            toast.error("Email is required");
            return false;
        } else if (password === "") {
            toast.error("Password is required");
            return false;
        } else if (rePassword === "") {
            toast.error("RePassword is required");
            return false;
        } else if (firstName === "") {
            toast.error("FirstName is required");
            return false;
        } else if (lastName === "") {
            toast.error("LastName is required");
            return false;
        } else if (phone === "") {
            alert("Phone is required");
            return false;
        } else if (address === "") {
            toast.error("Address is required");
            return false;
        } else
            return true;
    }
    let checkInputRadio = (e) => {
        if (e.target.checked) {
            setRadioChecked(true);
        } else {
            setRadioChecked(false);
        }
    }
    

    return (

      <div className="form-login">
      <form>
          <h1>????ng K??</h1>
          <div className="row">
                <div className="col">           
                      <label className="form-label"  >First name</label>
                      <input type="text"  className="form-control" name="firstName"
                      onChange={
                        (e) => handleOnChangeInput(e)
                    }
                       />
                </div>          
                 <div className="col">
                      <label className="form-label" htmlFor="form2Example1" 
                      
                      >Last name</label>
                      <input type="text"  className="form-control" name="lastName"
                      onChange={
                        (e) => handleOnChangeInput(e)
                    }
                      />
                </div>
          </div>
          <div className="row">
                <div className="col">           
                      <label className="form-label">Gi???i T??nh</label>
                      <select className="form-select" name="gender"
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      value={
                        gender
                      }
                      >
                          {
                            genderSelect && genderSelect.map((item, index) => {
                                return (
                                    <option key={index} value={item.keyMap}>{item.valueEn}</option>
                                )
                            }
                            )
                          }
                      </select>
                </div>          
                 <div className="col">
                      <label className="form-label">S??? ??i???n tho???i</label>
                      <input type="tel"  className="form-control" name="phoneNumber" 
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      />
                </div>
          </div>
          <div className="row">
                <div className="col">
                      <label className="form-label">?????a ch??? Email</label>
                      <input type="email"  className="form-control" name="email"
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      />
                </div>
          </div>
          <div className="row">
                <div className="col">
                      <label className="form-label">?????a ch???</label>
                      <input type="text"  className="form-control" name="address" 
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      />
                </div>
          </div>
          <div className="row">
                <div className="col">
                     <label className="form-label">M???t kh???u</label>
                      <input type="text"  className="form-control" name="password" 
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      />
                </div>
          </div>
          <div className="row">
                <div className="col">
                      <label className="form-label" >Nh???p l???i m???t kh???u</label>
                      <input type="text"  className="form-control" name="rePassword"
                      onChange={
                          (e) => handleOnChangeInput(e)
                      }
                      />

                </div>
          </div>
          <div className="row">                
                  <div className="col">                  
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                            onChange={
                                (e) => checkInputRadio(e)
                            }
                            />
                            <span > T??i ?????ng ?? v???i c??c ??i???u kho???n v?? d???ch v??? b??n HappyCare </span> 
                  </div>
               
          </div>
          <input type="button" className="btn btn-primary" value="????ng K??" onClick={

              () => handleRegister()
          }
          disabled={
              !radioChecked
          }
          />


      </form>
  </div>

    );
}
export default Register;