import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { useEffect, useState } from "react";
import { handleGetAllSpecialityApi } from "../../../services/specialtyService";
import "./scss/ProfileDoctor.scss"
import { handleGetAllCode } from '../../../services/systemService';
import CommonUtils from '../../../utils/CommonUtils';

function ProfileDoctor() {
    const [specialtyData,setSpecialtyData] = useState([]);
    const [positionData,setPositionData] = useState([]);
    const [provinceData,setProvinceData] = useState([]);
    const [doctorData,setDoctorData] = useState([]);
    const [paymentData,setPaymentData] = useState([]);
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [specialty,setSpecialty] = useState("");
    const [position,setPosition] = useState("");
    const [cost,setCost] = useState("");
    const [province,setProvince] = useState("");
    
    const [nameClinic,setNameClinic] = useState("");
    const [addressClinic,setAddressClinic] = useState("");
    const [contentHTML,setContentHTML] = useState("");
    const [contentMarkdown,setContentMarkdown] = useState("");
    const [avatar,setAvatar] = useState("");
    const [payment,setPayment] = useState("");
    const [avatarPreview,setAvatarPreview] = useState("https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg");




    let getSpecialtyData = async () => {
        let res = await handleGetAllSpecialityApi();
        console.log("res",res.specialities)
        setSpecialtyData(res.specialities);
        console.log(specialtyData);
        let res2 = await handleGetAllCode("POSITION");
        console.log("res2",res2)
        setPositionData(res2.data.data);
        let res3 = await handleGetAllCode("PROVINCE");
        setProvinceData(res3.data.data);
        console.log("res3",res3)
        let res4 = await handleGetAllCode("PAYMENT");
        setPaymentData(res4.data.data);

        
    }

    useEffect(() => {
        getSpecialtyData();
    },[])
    let handleEditorChange = ({html, text}) => {
        setContentHTML(html);
        setContentMarkdown(text);
    }
    let handleChangeInput = (e) => {
        let {name,value} = e.target;
        if(name === "specialty"){
            setSpecialty(value);
        }
        if(name === "position"){
            setPosition(value);
        }
        if(name === "cost"){
            setCost(value);
        }
        if(name === "province"){
            setProvince(value);
        }
        
        if(name === "nameClinic"){
            setNameClinic(value);
        }
        if(name === "addressClinic"){
            setAddressClinic(value);
        }
        if(name === "avatar"){
            setAvatar(value);
        }
        if(name==="payment"){
            setPayment(value);
        }

        
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("specialty",specialty);
        console.log("position",position);
        console.log("cost",cost);
        console.log("province",province);
        console.log("nameClinic",nameClinic);
        console.log("addressClinic",addressClinic);
        console.log("avatar",avatar);
        console.log("contentHTML",contentHTML);
        console.log("contentMarkdown",contentMarkdown);
    }
    let handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            console.log('base64: ', base64);
            let object = URL.createObjectURL(file);
            setAvatarPreview(object);
            setAvatar(base64);
        }
    }

    return (
        <div class="ProfileDoctor-container">
            <div className="row">
                <div className="col-1">
                    <div className="ProfileDoctor__avatar"                 >
                        <div
                        className="image-avatar"
                        style={{
                            backgroundImage: `url(${avatarPreview})`,
                        }}

                        >

                        </div>
                    </div>
                    <div class="select-avatar">
                    <input type="file" className="form-control" id="up-photo" hidden
                                    onChange={(e) => {
                                        handleOnChangeImage(e)
                                    }}
                                    name="avatar"
                                ></input>

<div className="upload"><label htmlFor="up-photo" className="upload-text"> <i className="fa-solid fa-arrow-up-from-bracket icon-upload"></i> Tải Ảnh</label></div>
                    </div>
                        

                </div>           
            </div>
            <div className="row">
            <div className="col-2">
                    <div className="ProfileDoctor__info">
                        <div className="ProfileDoctor__info__select_specialty">
                            <select className="form-control"
                            onChange={handleChangeInput}
                            name="specialty"
                            >
                                <option value="0">Chọn chuyên khoa</option>
                                {
                                    specialtyData.map((item,index) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    }
                                    )
                                }
                            </select>
                        </div>
                    </div>    
                </div>
                <div className="col-2">
                <div className="ProfileDoctor__info">
                        <div className="ProfileDoctor__info__select_specialty">
                            <select className="form-control"
                            name="position"
                            onChange={handleChangeInput}
                            >
                                <option value="0">Chọn vị trí</option>
                                {
                                    positionData.map((item,index) => {
                                        return (
                                            <option value={item.keyMap}>{item.valueVi}</option>
                                        )
                                    }
                                    )
                                }
                            </select>
                        </div>
                    </div>  
                </div>
                <div className="col-2">
                    <div className="ProfileDoctor__info__lastName">
                        <div className="cost"
                        
                        >
                                <input type="text" className="form-control" placeholder="Giá tiền" 
                                name="cost"
                                onChange={handleChangeInput}
                                />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="ProfileDoctor__info__lastName">
                        <div className="cost">
                        <select className="form-control"
                        onChange={handleChangeInput}
                        name="province"
                        >
                                <option value="0">Chọn vị trí</option>
                                {
                                    provinceData.map((item,index) => {
                                        return (
                                            <option value={item.keyMap}>{item.valueVi}</option>
                                        )
                                    }
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="ProfileDoctor__info__lastName">
                        <div className="cost">
                                <select className="form-control"
                                onChange={handleChangeInput}
                                name="payment"
                                >
                                    <option value="0">Chọn Phương Thức Thanh Toán</option>
                                    {
                                        paymentData.map((item,index) => {
                                            return (
                                                <option value={item.keyMap}>{item.valueVi}</option>
                                            )
                                        }
                                        )
                                    }
                                </select>
                                    

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label className="ProfileDoctor__info__name-clinic">Ten Phong Kham</label>
                    <input type="text" className="form-control" placeholder="Tên phòng khám" 
                    onChange={handleChangeInput}
                    name="nameClinic"
                    />
                </div>
                <div className="col-6">
                    <label className="ProfileDoctor__info__name-clinic">Dia chi Phong Kham</label>
                    <input type="text" className="form-control" placeholder="Địa chỉ phòng khám" 
                    onChange={handleChangeInput}
                    name="addressClinic"
                    />
                </div>
                
            </div>
            <div className="row">
                <div className="col-10">
                    <label className="ProfileDoctor__info__name-clinic">Mo ta Phong Kham</label>
                    <textarea className="form-control" rows="5" placeholder="Mô tả phòng khám"
                    onChange={handleChangeInput}
                    name="description"
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <label className="ProfileDoctor__info__name-clinic">Chi tiet</label>
                    <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Lưu"
            onClick={handleSubmit}
            />
            

        </div>
    );
}
export default ProfileDoctor;