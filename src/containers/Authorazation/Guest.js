import { Fragment } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import SideBar from '../Guest/ContainerPage/SideBar';
import Login from '../../containers/Authorazation/Login';

import './scss/Guess.scss';
import NavBar from '../Guest/ContainerPage/NavBar';
import HomePage from '../Guest/Page/HomePage';
import Service from '../Guest/Page/Sections/Service';
import Error404Page from '../Guest/Page/Error404Page';

function Guest() {
    return (
       <Fragment>   
              <BrowserRouter>        
              <div className="containers">
              <div class="header">
                <NavBar />
              </div>
              <div className="bodys">
                <div className="sidebar">
                <SideBar />
              </div>
                <div className="content">
                <Routes>            
            <Route path="/" element={
                    <>
                      <h1>Tôi là khách</h1>
                      <HomePage />
                    </>
            } />          
            <Route path="/login" element={
                <Login />
            } />           
                  <Route path="*" element={
                    <Error404Page />
            } />
        </Routes>
                </div>
            </div>
            
              </div>            
              </BrowserRouter>                  
       </Fragment>
    );
}
export default Guest;