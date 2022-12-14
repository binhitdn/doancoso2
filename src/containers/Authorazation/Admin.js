import Home from '../Admin/Page/Home';
import React, {Fragment, useContext} from 'react';
import {Routes, Route, Link, BrowserRouter, Navigate} from 'react-router-dom';

import NavBar from '../Admin/ContainerPage/NavBar';
import SideBar from '../Admin/ContainerPage/SideBar';
import UserManager from '../Admin/Page/UserManager';
import Error404Page from '../Guest/Page/Error404Page';
import "./scss/Admin.scss"
import SpecialtyManager from '../Admin/Page/SpecialtyManager';
import { ToastContainer } from 'react-toastify';
import SpecialtyManagerEdit from '../Admin/Page/SpecialtyManagerEdit';

function Admin() {


    

    return (
        <Fragment>
            <BrowserRouter>
                <div className="admin">
                    <div className="admin__header">
                        <NavBar />
                    </div>
                    <div className="admin__body">
                        <div className="admin__body__sidebar">
                            <SideBar />
                        </div>
                        <div className="admin__body__content">
                        <Routes>
                    <Route path="/" element={
                        <>
                            
                            <Home />

                        </>

                                } />


                                <Route path="/manager-user" element={
                        <>
                            
                            <UserManager /> 

                        </>

                                } />
                                <Route path="/" element={
                        <>
                            
                            <Home />

                        </>

                                } />


                                <Route path="/manager-specialty/add" element={
                            <SpecialtyManager />

                    }/>
                    <Route path="/manager-specialty/edit" element={
                            <SpecialtyManagerEdit />

                    }/>
                    <Route path="login" element={
                        <Navigate to="/"/>
                    }/>
                    <Route path="*" element={<Error404Page/>}/>
                </Routes>
                        </div>
                    
                    </div>
                </div>

            </BrowserRouter>

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
        </Fragment>
    );
}

export default Admin;