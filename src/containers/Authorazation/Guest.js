import { Fragment } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import SideBar from '../Guest/ContainerPage/SideBar';
import Login from '../../containers/Authorazation/Login';

import './scss/Guess.scss';
import NavBar from '../Guest/ContainerPage/NavBar';
import HomePage from '../Guest/Page/HomePage';
import Service from '../Guest/Page/Sections/Service';
import Error404Page from '../Guest/Page/Error404Page';
import Specialist from '../Guest/Page/Specialist';
import Doctor from '../Guest/Page/Doctor';
import HandBook from '../Guest/Page/HandBook';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthToken } from '../../utils/AuthToken';

function Guest() {
  const { loading, setLoading } = useContext(AuthToken);
  useEffect(() => {
    console.log("Tao nef");
      setLoading(!loading);
  }, []);
  
    return (
       <Fragment>   
              <BrowserRouter>        
              <div className="containers">
              <div className="header">
                <NavBar />
              </div>
              <div className="bodys">
                <div className="sidebars">
                <SideBar />
              </div>
                <div className="content">
                <Routes>            
            <Route path="/" element={
                    
                      
                      <HomePage />
                    
            } />  
                  <Route path="/specialty" element={<Specialist />} />      
                  <Route path="/doctor" element={<Doctor />} />   
                  <Route path="/handbook" element={<HandBook />} />
            <Route path="/login" element={
                <Login />
            } />    
            <Route path="/register" element={
                <Register />
            } />    
                  <Route path="*" element={
                    <Error404Page />
            } />
        </Routes>
                </div>
            </div>
            

            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
              </div>            
              </BrowserRouter>                  
       </Fragment>
    );
    
}
export default Guest;