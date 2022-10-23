import Cookies from 'js-cookie';
import { Fragment, useContext } from 'react';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthToken } from '../../utils/AuthToken';

function Doctor() {
    const {author,setAuthor} = useContext(AuthToken);
    let handleClickLogout = () => {
        Cookies.remove('token');
        setAuthor("guest");
    }
    return (
       <Fragment>
              <BrowserRouter>
              <Routes>
            <Route path="/" element={
                 <>
                 <h1>Tôi là doctor</h1>
             
             <button onClick={handleClickLogout}>
                 Dang xuat
             </button>
             
             </>
            } />
            <Route path="login" element={
                <Navigate to="/" />
            } />
            <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
              </BrowserRouter>
                    
       </Fragment>
    );
}
export default Doctor;