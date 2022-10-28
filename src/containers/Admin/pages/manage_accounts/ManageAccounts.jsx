import {BrowserRouter as Route, Link} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ManageAccounts = () => {
    return (
        <div className="formManageAccounts">
            <form className="row g-3 mt-5">
                <div className="col-md-6">
                    <label htmlFor="">ID</label>
                    <input type="text"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Phone</label>
                    <input type="text"/>
                </div>


                <div className="col-md-6">
                    <label htmlFor="">Email</label>
                    <input type="email"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Address</label>
                    <input type="text"/>
                </div>

                <div className="col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>
                <div className="col">
                    <label htmlFor="" className="col-md-2">Gender</label>
                    {/*<div className="form-check-gender">*/}
                    <input type="radio" name="gender" className="col-md-2"/>
                    <label htmlFor="">Male</label>
                    <input type="radio" name="gender" className="col-md-2"/>
                    <label htmlFor="">Female</label>
                    {/*</div>*/}
                </div>
                <div className="col-md-6">
                    <label htmlFor="">First Name</label>
                    <input type="text"/>
                </div>
                <div className="col-md-6">
                    {/*<label htmlFor="">Role ID</label>*/}
                    {/*<input type="text"/>*/}
                    <select className="form-select">
                        <option selected>Role ID...</option>
                        <option value="1">Admin</option>
                        <option value="2">Doctor</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Last Name</label>
                    <input type="text"/>
                </div>




                <div className="mb-3">
                    {/*<Link to="/" style={{textDecoration: "none"}}>
                        Create Account
                    </Link>*/}
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default ManageAccounts;