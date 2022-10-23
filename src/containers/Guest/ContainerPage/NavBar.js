import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
        <div className="navbar__logo">
            
        </div>
        <div className="navbar__links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        </div>
    );
}
export default NavBar;