import TableUser from "./ChildComponent/TableUser";
import axios from '../../../axios';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./scss/UserManager.scss";

function UserManager() {
    const [genderData, setGenderData] = useState([]);
    const [roleData, setRoleData] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("M");
    const [role, setRole] = useState("R1");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("A");

    let handleGetData = async () => {
        let gender = await axios.get("/api/allcode?type=GENDER");
        let role = await axios.get("/api/allcode?type=ROLE");
        setRoleData(role.data.data);

        setGenderData(gender.data.data);
       
    }
    let handleOnChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "phone") {
            setPhone(value);
        } else if (name === "gender") {
            setGender(value);
        } else if (name === "role") {
            setRole(value);
        } else if (name === "address") {
            setAddress(value);
        }
    }
    let handleAddUser = async () => {
        if (!checkValidate()) {
            let data = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                gender: gender,
                role: role,
                address: address
            }
            let addUser = await axios.post("/api/create-new-user", data);
            checkStatus(addUser.message.message);
        } else {
            toast("Vui l??ng nh???p ?????y ????? th??ng tin");
            setEmail("q");
        }

    }
    let handleEditUserFromParent = async (data) => {
        setEmail(data.email);
        setPassword("password");
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhone(data.phone);
        setGender(data.gender);
        setRole(data.role);
        setAddress(data.address);
        setStatus("E");
    }
            
    let checkStatus = (status) => {
        if (status === "OK") {
            toast("???? th??m th??nh c??ng ng?????i d??ng m???i!");
            // setEmail("");
            // setPassword("");
            // setFirstName("");
            // setLastName("");
            // setPhone("");
            // setGender("M");
            // setRole("R1");
            // setAddress("");
        }
    }
    let checkValidate = () => {
        if (email === "" || password === "" || firstName === "" || lastName === "" || phone === "" || address === "") {
            return true;
        }
        return false;
    }
    
        

    useEffect(() => {
        handleGetData();
    }, [])
    useEffect(() => {
        console.log("render cha")
    })

    let handleDeleteUserFromParent = async (id) => {
        // await handleDeleteUserApi(id);
        // this.props.fetchAllUserStart();
        let a = await axios.delete("/api/delete-user?id=" + id);
        console.log("Delete",a);
    }

    return (
        <div className="userM_container">
                        <div className="row">
                            <div className="col-3">
                                <label>Email</label>
                                <input onChange={(e) => handleOnChangeInput(e)} className="form-control" type="text" name="email" 
                        value={email} 
                        {
                            ...status === "E" ? { disabled: true } : { disabled: false }
                        }
                                ></input>
                            </div>
                            <div className="col-3">
                                <label>PassWord</label>
                    <input onChange={(e) => handleOnChangeInput(e)} className="form-control" type="password" name="password" 
                        value={password}
                        {
                            ...status === "E" ? { disabled: true } : { disabled: false }
                                    }
                                ></input>
                            </div>
                            <div className="col-3">
                                <label>First Name</label>
                    <input onChange={(e) => handleOnChangeInput(e)} className="form-control" type="text" name="firstName"
                    value={firstName}
                    ></input>
                            </div>
                            <div className="col-3">
                                <label>Last Name</label>
                    <input onChange={(e) => handleOnChangeInput(e)} className="form-control" type="text" name="lastName"
                    value={lastName}
                    ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>Phone</label>
                    <input onChange={(e) => handleOnChangeInput(e)} className="form-control" type="text" name="phone"
                    value={phone}
                    ></input>
                            </div>
                           
                <div className="col-3">
                                <label>Gi???i T??nh</label>
                    <select className="form-select" onChange={(e) => handleOnChangeInput(e)} name="gender"
                    value={gender}
                    >
                        { genderData &&
                            genderData.map((item, index) => {
                                return (
                                    <option key={ index} value={item.keyMap}>{item.valueVi}</option>
                                )
                            }
                            )
                                    }
                                    
                                </select>
                            </div>
                            <div className="col-3">
                                <label>Vai tr??</label>
                    <select className="form-select" onChange={(e) => handleOnChangeInput(e)} name="role"
                    value={role}
                    >
                        {roleData &&

                            roleData.map((item, index) => {
                                return (
                                    <option key={ index} value={item.keyMap}>{item.valueVi}</option>
                                )
                            }
                            )
                                    }
                            
                                    
                                </select>
                            </div>

                        </div>
                        <div className="row">
                                <div className="col-9">
                                    <label>Address</label>
                                    <input onChange={(e) => handleOnChangeInput(e)} className="form-control
                                    " type="text" name="address" value={address}></input>
                                </div>
                                <div className="col-3">
                                    <label> </label>
                    <div style={
                        {
                            display: "flex",
                            justifyContent: "space-between"
                        }
                                    }>
                        

                        {
                        status === "A" &&
                        <input type="submit" className="btn btn-primary"
                        style={{ display: "block", width: "100%" }} value="Th??m Ng?????i D??ng"
                        onClick={() => handleAddUser()}
                    ></input>
                    }
                    {
                        status === "E" &&
                        <>
                            <input type="submit" className="btn btn-warning"
                                    style={{
                                        display: "block", width: "100%", flex: "2", marginRight: "10px"
                                        
                                    }} value="S???a Ng?????i D??ng"
                            onClick={() => handleAddUser()}
                                ></input>
                                <input type="submit" className="btn btn-danger"
                                    style={{ display: "block", width: "100%", flex: "1" }} value="H???y"

                                    onClick={() => {
                                        setEmail("");
                                        setPassword("");
                                        setFirstName("");
                                        setLastName("");
                                        setPhone("");
                                        setGender("M");
                                        setRole("R1");
                                        setAddress("");
                                        setStatus("A");
                                    }}
                                ></input>
                        </>
                
                    }
                                    </div>
                                </div>
                                
                            
            </div>
            <div
            style={{width: "100%",marginTop: "20px"}}
            >
                <TableUser
                    handleDeleteUserFromParent={handleDeleteUserFromParent}
                    handleEditUserFromParentKey={handleEditUserFromParent}
                />
            </div>






            
                        

                    </div>

    );
}
export default UserManager;