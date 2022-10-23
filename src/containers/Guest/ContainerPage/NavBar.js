import { Link } from "react-router-dom";
import "./css/NavBar.scss";

function NavBar() {
    return (
        <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            {/* <i className="fa fa-bars logo" ></i> */}

                            <div className="header-logo"
                                
                            >LOGO</div>

                        </div>
                        <div className="center-content">
                        </div>
                        <div className="right-content">
                            {/* <div className="support">
                                <i className="fa fa-question-circle"></i> Hỗ trợ
                            </div> */}
                            <p className="lang-vi lang active">VN</p>
                            <p className="lang-en lang" >EN</p>
                        <p className="lang-jp lang" >日本語</p>
                        
                        <Link to="/login"
                         className="btn btn-primary btn-login"
                        >Đăng nhập</Link>
                        
                    
                            
                        </div>
                    </div>
                </div>
            </>
    );
}
export default NavBar;