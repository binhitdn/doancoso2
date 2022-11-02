import { Link } from "react-router-dom";
import "./scss/NavBar.scss";
import Cookies from 'js-cookie';
import {AuthToken} from '../../../utils/AuthToken';
import { useContext } from "react";
import {handleAuth } from "../../../Auth/index"

function NavBar() {
    const { author, setAuthor } = useContext(AuthToken);
    let handleClickLogout = () => {
        Cookies.remove('tokenAuth');
        setAuthor("guest");
    }
    return (
        <div className="navbar">
        <div className="navbar__logo">
            <h3>CareHappy</h3>
        </div>
        <div className="navbar__menu">
                <div>
                    Xin chào, {
                        handleAuth().email
                    }
                </div>
                &nbsp;
                <div onClick={handleClickLogout}>
                              Đăng xuất  <i className="fas fa-sign-out-alt"></i>
                </div>
        </div>
        </div>
    );
}
export default NavBar;