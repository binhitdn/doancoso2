import Cookies from 'js-cookie';
import React, { Fragment, useContext } from 'react';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthToken } from '../../utils/AuthToken';
import Error404Page from '../Guest/Page/Error404Page';

function Admin() {
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
                    <h1>Tôi là admin</h1>
                
                <button onClick={handleClickLogout}>
                    Dang xuat
                </button>
                
                </>

            } />
            <Route path="login" element={
                <Navigate to="/" />
            } />
            <Route path="*" element={<Error404Page/>} />
        </Routes>
              </BrowserRouter>
                    
       </Fragment>
    );
}
export default Admin;