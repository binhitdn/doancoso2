import Cookies from 'js-cookie';
import { Fragment, useContext } from 'react';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthToken } from '../../utils/AuthToken';
import NavBar from '../Doctor/ContainerPage/NavBar';
import SideBar from '../Doctor/ContainerPage/SideBar';
import ProfileDoctor from '../Doctor/Page/ProfileDoctor';
import Profile from "../Doctor/Page/Profile"
import Error404Page from '../Guest/Page/Error404Page';
import "./scss/Doctor.scss"

function Doctor() {
    const {author,setAuthor} = useContext(AuthToken);
    let handleClickLogout = () => {
        Cookies.remove('tokenAuth');
        setAuthor("guest");
    }
    return (
       <Fragment>
              <BrowserRouter>
              <div className="doctor">
                    <div className="doctor__header">
                        <NavBar />
                    </div>
                    <div className="doctor__body">
                        <div className="doctor__body__sidebar">
                            <SideBar />
                        </div>
                        <div className="doctor__body__content">
                        <Routes>
                    <Route path="/" element={
                        <>
                            
                            <h1>Hello Doctor</h1>

                        </>

                                } />
                    <Route path="/profile-doctor" element={
                        <ProfileDoctor />
                    } />
                    <Route path="/profile" element={
                        <Profile />
                    } />




                                
                    <Route path="login" element={
                        <Navigate to="/"/>
                    }/>
                    <Route path="*" element={<Error404Page/>}/>
                </Routes>
                        </div>
                    
                    </div>
                </div>
              </BrowserRouter>
                    
       </Fragment>
    );
}
export default Doctor;