import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthToken } from "../../../utils/AuthToken";
import "./css/NavBar.scss";
import {handleAuth } from "../../../Auth/index"
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import SwitchLanguage from "../../../components/SwitchLanguage";
import ToggleMode from "../../../components/ToggleMode";

function NavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { author, setAuthor } = useContext(AuthToken);
    const [email, setEmail] = useState(null);
    const [roleId, setRoleId] = useState(null);
    

    useEffect(() => {
        try {
            setEmail(handleAuth().email);
            setRoleId(handleAuth().roleId);
        } catch (error) {
            console.log(error);
        }
    }, []);

    let handleClickLogout = () => {
        setAuthor("guest");
        Cookies.remove('tokenAuth');
        setAuthor("guest");
        navigate('/');
        toast.success("Đăng xuất thành công");
        
    }
    return (
        <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            {/* <i className="fa fa-bars logo" ></i> */}

                            <div className="header-logo"
                                
                            >HAPPY CARE</div>

                        </div>
                        <div className="center-content">
                        </div>
                        <div className="right-content">
                            {/* <div className="support">
                                <i className="fa fa-question-circle"></i> Hỗ trợ
                            </div> */}
                            {/* <p className="lang-vi lang active">VN</p>
                            <p className="lang-en lang" >EN</p>
                        <p className="lang-jp lang" >日本語</p> */}

                        <ToggleMode/>
                        
                        
                       {
                            !(author==3) &&  <Link to="/login"
                            className="btn btn-primary btn-login"
                           >Đăng nhập</Link>
                       }
                       
                        {
                            (author==3) && <div className="information"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                Xin chào<span className="user-name"> {email}<i className="fa-regular fa-circle-caret-down icon-dropdown"></i></span>
                                <div className="manager-info"
                                style={{display: isMenuOpen ? "block" : "none"}}
                                >
                                    <ul className="user-menu">
                                        <li><i className="fa-regular
                                        fa-user"></i>Thông tin tài khoản</li>
                                        
                                            <div onClick={
                                                handleClickLogout
                                            }>
                                             <i className="fa-regular
                                        fa-sign-out">
                                            </i>Đăng xuất
                                            </div>
                                        
                                    </ul>
                                </div>
                            </div>
                        }
                        
                    
                            
                        </div>
                    </div>
                </div>
            </>
    );
}
export default NavBar;