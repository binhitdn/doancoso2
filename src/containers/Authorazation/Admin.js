import Cookies from 'js-cookie';
import React, {Fragment, useContext} from 'react';
import {Routes, Route, Link, BrowserRouter, Navigate} from 'react-router-dom';
import {AuthToken} from '../../utils/AuthToken';
import Error404Page from '../Guest/Page/Error404Page';
import Home from "../Admin/pages/home/Home";
import {DarkModeContext} from "../Admin/context/darkModeContext";
import Login from "../Admin/pages/login/Login";
import List from "../Admin/pages/list/List";
import Single from "../Admin/pages/single/Single";
import New from "../Admin/pages/new/New";
import {productInputs, userInputs} from "../Admin/formSource";
import Interface from "../Admin/pages/manage_accounts/Interface";

function Admin() {
    const {author, setAuthor} = useContext(AuthToken);
    const {darkMode} = useContext(DarkModeContext);

    let handleClickLogout = () => {
        Cookies.remove('token');
        setAuthor("guest");
    }

    return (
        <Fragment>
            {/*<BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1>Tôi là admin</h1>
                            <Home/>
                            <button onClick={handleClickLogout}>
                                Dang xuat
                            </button>

                        </>

                    }/>
                    <Route path="login" element={
                        <Navigate to="/"/>
                    }/>
                    <Route path="*" element={<Error404Page/>}/>
                </Routes>
            </BrowserRouter>*/}

            <div className={darkMode ? "app dark" : "app"}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={
                                <>
                                    <Home/>
                                    <button onClick={handleClickLogout}>
                                        Dang xuat
                                    </button>
                                </>
                            }/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="doctors">
                                <Route index element={<List/>}/>
                                <Route path=":userId" element={<Single/>}/>
                                <Route
                                    path="new"
                                    element={<New inputs={userInputs} title="Add New User"/>}
                                />
                            </Route>
                            <Route path="patients">
                                <Route index element={<List/>}/>
                                <Route path=":productId" element={<Single/>}/>
                                <Route
                                    path="new"
                                    element={<New inputs={productInputs} title="Add New Product"/>}
                                />
                            </Route>
                            <Route path="accounts">
                                <Route index element={<Interface/>}/>
                            </Route>
                        </Route>
                        <Route path="*" element={<Error404Page/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Fragment>
    );
}

export default Admin;