import Cookies from 'js-cookie'
import { useContext } from 'react';
import  { Navigate ,useNavigate} from 'react-router-dom'
import { AuthToken } from '../../utils/AuthToken';
function Login() {
    const navigate = useNavigate();
    const {author,setAuthor} = useContext(AuthToken);
    let handleClickLoginAdmin = () => {
        Cookies.set('token', '1', { expires: 7 })
        
        setAuthor("1");
        console.log("author: ",author);
        navigate('/');
        console.log('Login admin');
        
        
        
        
        
        
    }
    let handleClickLoginDoctor = () => {
        Cookies.set('token', '2', { expires: 7 })
        setAuthor("2");
        navigate('/');
        console.log('Login doctor');
        
       
        
        
        
        
    }
    
    return (
        <div>
            <h1>Tôi là login</h1>
            <button className="btn btn-primary" onClick={handleClickLoginAdmin}>
                Dang nhap voi tu cach admin
            </button>
            <button className="btn btn-primary" onClick={handleClickLoginDoctor}>
                Dang nhap voi tu cach doctor
            </button>
        </div>
    );
}
export default Login;