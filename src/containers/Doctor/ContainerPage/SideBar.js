import { NavLink } from "react-router-dom";
import "./scss/SideBar.scss";

function SideBar() {

    let handleClick = () => {
        console.log("click");
        this.classList.toggle("active"); 
    }
    return (

        <div className="sidebar">
            <div className="sidebar__logo">
                
            </div>
            <div className="sidebar__menu">
                <ul>
                <li>
                        <NavLink to="/admin/products" activeClassName="active">
                        <i class="fa-solid fa fa-database"></i>
                            <span>Thống Kê</span>
                        </NavLink>
                    </li>
                   

                    <li>
                        <NavLink to="/manager-specialty" activeClassName="active">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span>Quản Lí Cuộc Hẹn </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/manager-specialty" activeClassName="active">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span>Quản Lí Bệnh Nhân </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile-doctor" activeClassName="active">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span>Thông tin bác sĩ </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName="active">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span>Thông tin cá nhân </span>
                        </NavLink>
                    </li>
                    
                        
                    

                </ul>
            </div>
        </div>
    );

}
export default SideBar;