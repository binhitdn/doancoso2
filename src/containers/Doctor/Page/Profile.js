import { useState } from "react";

function Profile() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [gender,setGender] = useState("");
    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" name="firstName" />
                </div>
                <div className="col-2">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" name="lastName" />
                </div>
                <div className="col-2">
                <label>Giới tính</label>
                <select className="form-control" name="gender">
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                </select>
                </div>
                <div className="col-4">
                    <label>Địa chỉ</label>
                    <input type="text" className="form-control" placeholder="Địa chỉ" name="address" />
                </div>

                
            </div>
            <div className="row">
                <div className="col-5">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="col-5">
                    <label>Số điện thoại</label>
                    <input type="tel" className="form-control" placeholder="Số điện thoại" name="phone" />
                </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Lưu" />
            <div className="row">
                <div className="col-5">
                    <label>Mật khẩu cũ</label>
                    <input type="password" className="form-control" placeholder="Mật khẩu cũ" name="oldPassword" />
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <label>Mật khẩu mới</label>
                    <input type="password" className="form-control" placeholder="Mật khẩu mới" name="newPassword" />
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <label className="form-label">Xác nhận mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Xác nhận mật khẩu" name="confirmPassword" />
                </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Thay đổi mật khẩu" />   
        </div>
    )
}
export default Profile;