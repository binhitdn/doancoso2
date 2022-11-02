import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import CommonUtils from '../../../utils/CommonUtils';
import Lightbox from 'react-image-lightbox';
import { toast } from 'react-toastify';
import {handleCreateSpecialityApi} from '../../../services/specialtyService';


function SpecialtyManager() {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [nameSpecialty, setNameSpecialty] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [contentHTML, setContentHTML] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState('');

// Finish!
function handleEditorChange({ html, text }) {
    setContentHTML(html);
    setContentMarkdown(text);
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

let handleSaveSpeciality = async() => {
    if(validate()) {
        let res = await handleCreateSpecialityApi({
            name: nameSpecialty,
            contentHTML: contentHTML,
            contentMarkdown: contentMarkdown,
            avatar: avatar,
            description: description
        })
        console.log('res: ', res);
        toast.success('Tạo chuyên khoa thành công');
    }
   

}
let validate = () => {
    if (nameSpecialty === '') {
        toast.error("Tên chuyên khoa không được để trống");
        return false;
    }
    if (avatar === '') {
        toast.error("Ảnh đại diện không được để trống");
        return false;
    }
    if (contentMarkdown === '') {
        toast.error("Nội dung không được để trống");
        return false;
    } else if(contentHTML === '') {
        toast.error("Nội dung không được để trống");
        return false;
    } else if (description === '') {
        toast.error("Mô tả không được để trống");
        return false;
    }
    return true;
}
let handleChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === 'nameSpecialty') {
        setNameSpecialty(value);
    } else if (name === 'contentMarkdown') {
        setContentMarkdown(value);
    } else if (name === 'contentHTML') {
        setContentHTML(value);
    } else if (name === 'avatar') {
        setAvatar(value);
    } else if (name === 'avatarPreview') {
        setAvatarPreview(value);
    } else if (name === 'isOpen') {
        setIsOpen(value);
    } else if (name === 'description') {
        setDescription(value);
    }
}
        
    return (
    //     <div className="manage-doctor-container">
    //     <div className="manage-doctor-title">Tạo thêm thông tin bác sĩ</div>
    //     <div className="more-info">
    //       <div className="content">
    //         <div className="content-left">
    //           <label>Chọn Bác Sĩ: </label>
    //           {/* <Select
    //             value={this.selectedDoctor}
    //             onChange={this.handleChange}
    //             options={options}
    //           /> */}
    //         </div>
    //         <div className="content-right">
    //           <label>Thông tin giới thiệu:</label>
    //           <textarea
    //             className="form-control"
    //             rows="5"
    //             onChange={(e) => { this.handleOnChangeDesc(e) }}
                
    //           >
    //           </textarea>

    //         </div>

    //       </div>
    //     </div>
    //     <div className="doctor-detail">
    //       <div className="content">
    //         <div className="content-left">
    //           <label>Chọn Giá Khám: </label>
    //           <select className="form-select" name="selectedPrice"
    //             onChange={(e) => {
    //               this.handleChangeSelect(e)
    //             }}
                
    //           >
    //             {/* {listPrice && listPrice.length > 0 && listPrice.map((price, index) => {
    //               return (
    //                 <option key={index} value={
    //                   price.keyMap
    //                 }>{price.valueVi}</option>
    //               )
    //             })
    //             } */}

    //           </select>
    //         </div>
    //         <div className="content-left">
    //           <label>Chọn Tỉnh: </label>
    //           <select className="form-select" name="selectedProvince"
    //             onChange={
    //               (e) => {
    //                 this.handleChangeSelect(e)
    //               }
    //             }
                
    //           >
    //             {/* {listProvince && listProvince.length > 0 && listProvince.map((province, index) => {
    //               return (
    //                 <option key={index} value={province.keyMap}>{province.valueVi}</option>
    //               )
    //             })
    //             } */}

    //           </select>
    //         </div>
    //         <div className="content-left">
    //           <label>Chọn Phương Thức Thanh Toán: </label>
    //           <select className="form-select" name="selectedPayment"
    //             onChange={
    //               (e) => {
    //                 this.handleChangeSelect(e)
    //               }
    //             }
                
    //           >
    //             {/* {listPayment && listPayment.length > 0 && listPayment.map((payment, index) => {
    //               return (
    //                 <option key={index} value={payment.keyMap}>{payment.valueVi}</option>
    //               )
    //             })
    //             } */}

    //           </select>
    //         </div>


    //       </div>
    //     </div>
    //     <div className="doctor-detail">
    //       <div className="content">
    //         <div className="content-left">
    //           <label>Tên Phòng Khám: </label>
    //           <input type="text" className="form-control"
    //             onChange={(e) => {
    //               this.handleChangeSelect(e)
    //             }}
                
    //             name="nameClinic"
    //           ></input>
    //           <div className="content-left">
    //             <label>Địa Chỉ Phòng Khám: </label>
    //             <input type="text" className="form-control"
    //               onChange={(e) => {
    //                 this.handleChangeSelect(e)
    //               }}
                 
    //               name="addressClinic"
    //             ></input>
    //           </div>
    //           <div className="content-left">
    //             <label> Note : </label>
    //             <input type="text" className="form-control"
    //               onChange={(e) => {
    //                 this.handleChangeSelect(e)
    //               }}
                  
    //               name="note"
    //             ></input>
    //           </div>
    //           <div className="content-left">
    //             <label>Chuyên Khoa: </label>
    //           <div name="selectedSpecialty" >
    //             {/* {listSpecialty && listSpecialty.length > 0 && listSpecialty.map((specialty, index) => {
    //               return (
    //                 // <option key={index} value={specialty.id}>{specialty.name}</option>
    //                 <span>
    //                   <input key={index} className="form-check-input" type="checkbox" value={specialty.id} 
                      
    //                   onClick={(e) => {
    //                     this.handleOnChangeCheckbox(e)
    //                   }}
    //                   />
    //                 <label>{specialty.name}</label>
    //                 </span>
                   
                    
    //               )
    //             })
    //             } */}
                

    //           </div>
    //           </div>


    //         </div>
    //       </div>
    //     </div>
    //     <div className="manage-doctor-edit">
    //       {/* <MdEditor style={{ height: '500px' }} renderHTML={text =>
    //         mdParser.render(text)} onChange={this.handleEditorChange} value={this.state.contentMarkdown} /> */}
    //     </div>
    //     <button
    //       onClick={() => {
    //         this.handleSaveContentMarkdown()
    //       }}
    //       className="button-save"
    //     >
    //       Lưu thông tin
    //     </button>
    //   </div>
    <div className="manage-doctor-container">
                <div className="manage-doctor-container__header text-center">
                    <h3>Thêm chuyên khoa</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                    <label>Tên chuyên khoa</label>
                        <input type="text" className="form-control" onChange={(e)=>{handleChangeInput(e)}} name="nameSpecialty" value={nameSpecialty} ></input>
                    </div>
                    <div className="col-6">
                    <div className="col-6">
                        <label>Chọn ảnh</label>
                                <input type="file" className="form-control" id="up-photo" hidden
                                    onChange={(e) => {
                                        handleOnChangeImage(e)
                                    }}
                                    name="avatar"
                                ></input>
                                <div className="upload"><label htmlFor="up-photo" className="upload-text"> <i className="fa-solid fa-arrow-up-from-bracket icon-upload"></i> Tải Ảnh</label></div>
                                <div className="preview-image"
                                    style={{ backgroundImage: `url(${avatarPreview})` }}
                                    onClick={() => {
                                        setIsOpen(true)
                                    }
                                    }
                                ></div>
                    </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                    <label>Mô tả</label>
                    <textarea className="form-control" rows="6" onChange={(e)=>{handleChangeInput(e)}} name="description"></textarea>
                    </div>
                <div  className="col-6">
                    <label>Xem trước ảnh</label>
                    <div className="preview-image"
                    

                    style={{ backgroundImage: `url(${avatarPreview})` ,height:"150px" ,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                }}

                    ></div>
                    


               



              
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />       
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <button className="btn btn-primary" 
                onClick={
                    handleSaveSpeciality
                }
                >Lưu</button>
                {isOpen && (
                    <Lightbox

                        mainSrc={avatarPreview}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                )}
                </div>
            </div>
        </div>


    );
}
export default SpecialtyManager;