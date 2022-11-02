import "./TableUser.scss"
import axios from '../../../../axios';
import { useEffect, useState } from "react";
import { isBuffer, set } from "lodash";
function TableUser(props) {
    const [users, setUsers] = useState([]);
    


    let handleGetAllUser = async () => {
        let inputId = "ALL";
        let api = await axios.get(`/api/get-all-users?id=${inputId}`)
        console.log("api: ", api.users);
        setUsers(api.users);
    }
    let updateListUsers = async (user) => {
        await handleGetAllUser();
    }

     useEffect(() => {
        console.log("render con")
     })
    useEffect(() => {
        handleGetAllUser();
    }, [])
    

    
   
    
    

    let handleEditUser = (user) => {
        props.handleEditUserFromParentKey(user);
    }
    let handleDeleteUser =  async(id) => {
        await props.handleDeleteUserFromParent(id);
        handleGetAllUser();
    }


    return (
        <table id="customers">
  <tr>
                <th>ID</th>
                <th>Họ Tên</th>
                <th>Giới Tính</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Vai trò</th>
                <th>Thao tác</th>


    
  </tr>
  
            {
                users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.lastName} {user.firstName}</td>
                            <td>{
                            (user.gender === 1) ? "Nam" : "Nữ"
                            }</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.roleId}</td>
                            <td>
                                <button className="btn btn-success"
                                    onClick={
                                        () => {
                                            handleEditUser(user)
                                        }
                                    }
                                    
                                >Sửa</button>
                                <button className="btn btn-danger"
                                    onClick={
                                        
                                        () => { handleDeleteUser(user.id) }
                                        
                                    }
                                >Xóa</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    );
        

}
export default TableUser;