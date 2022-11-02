import Admin from "./containers/Authorazation/Admin";
import Guest from "./containers/Authorazation/Guest";
import Doctor from "./containers/Authorazation/Doctor";
import Cookies from "js-cookie";
import React, {useContext} from "react";
import {AuthToken} from "./utils/AuthToken";
import {handleAuth } from "./Auth/index";
function App() {
    const [author, setAuthor] = React.useState(handleAuth().roleId ? handleAuth().roleId : "guest");
    const [loading, setLoading] = React.useState(true);

    

    


    if (author == 1) {
        return (
            <AuthToken.Provider value={{author, setAuthor,loading,setLoading}}>
                <Admin/>
            </AuthToken.Provider>
        )
    } else if (author == 2) {
        return (
            <AuthToken.Provider value={{author, setAuthor,loading,setLoading}}>
                <Doctor/>
            </AuthToken.Provider>
        )
    } else {
        return (
            <AuthToken.Provider value={{author, setAuthor,loading,setLoading}}>
                <Guest/>
            </AuthToken.Provider>
        )
    }
}

export default App;
