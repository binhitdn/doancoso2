import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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
                    {/*<p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span></span>
                    </li>*/}
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
                    <li>
                        <LocalHospitalIcon className="icon"/>
                        <span>Specialist</span>
                    </li>
                    <li>
                        <AutoStoriesIcon className="icon"/>
                        <span>Handbook</span>
                    </li>
                    <p className="title">USEFUL</p>
                    {/*<li>
                        <InsertChartIcon className="icon"/>
                        <span></span>
                    </li>*/}
                    <li>
                        <NotificationsIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    {/*<p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span></span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span></span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span></span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span></span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span></span>
                    </li>*/}
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