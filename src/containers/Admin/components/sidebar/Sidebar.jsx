import "./sidebar.scss";
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Route, Link} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {useContext} from "react";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">Happy Care</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PeopleAltIcon className="icon"/>
                            <span>Doctors</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <li>
                            <PeopleIcon className="icon"/>
                            <span>Patients</span>
                        </li>
                    </Link>
                    <Link to="/specialist" style={{textDecoration: "none"}}>

                        <li>
                            <LocalHospitalIcon className="icon"/>
                            <span>Specialist</span>
                        </li>
                    </Link>
                    <Link to="/handbook" style={{textDecoration: "none"}}>

                        <li>
                            <AutoStoriesIcon className="icon"/>
                            <span>Handbook</span>
                        </li>
                    </Link>
                    <Link to="/accounts" style={{textDecoration: "none"}}>
                        <li>
                            <ManageAccountsIcon className="icon"/>
                            <span>Accounts</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <Link to="/notifications" style={{textDecoration: "none"}}>
                        <li>
                            <NotificationsIcon className="icon"/>
                            <span>Notifications</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({type: "LIGHT"})}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({type: "DARK"})}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;