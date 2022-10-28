import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ManageAccounts from "./ManageAccounts";

const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <ManageAccounts/>
            </div>
        </div>
    )
}

export default List