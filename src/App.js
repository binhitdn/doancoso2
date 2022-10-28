import Admin from "./containers/Authorazation/Admin";
import Guest from "./containers/Authorazation/Guest";
import Doctor from "./containers/Authorazation/Doctor";
import Cookies from "js-cookie";
import React, {useContext} from "react";
import {AuthToken} from "./utils/AuthToken";

function App() {
    const [author, setAuthor] = React.useState(Cookies.get("token") ? Cookies.get("token") : "guest");


    if (author == 1) {
        return (
            <AuthToken.Provider value={{author, setAuthor}}>
                <Admin/>
            </AuthToken.Provider>
        )
    } else if (author == 2) {
        return (
            <AuthToken.Provider value={{author, setAuthor}}>
                <Doctor/>
            </AuthToken.Provider>
        )
    } else {
        return (
            <AuthToken.Provider value={{author, setAuthor}}>
                <Guest/>
            </AuthToken.Provider>
        )
    }
}

export default App;
