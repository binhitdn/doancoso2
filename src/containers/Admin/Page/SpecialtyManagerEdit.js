import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import CommonUtils from '../../../utils/CommonUtils';
import Lightbox from 'react-image-lightbox';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { handleGetAllSpecialityApi } from '../../../services/specialtyService';



function SpecialtyManagerEdit() {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [nameSpecialty, setNameSpecialty] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [contentHTML, setContentHTML] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [specialties, setSpecialties] = useState([]);
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState([]);


    let handleGetDataSpecialty =async () => {
        let res = await handleGetAllSpecialityApi();
        setSpecialties(res.specialities);
        console.log(res.specialities);
        
        
    }

    useEffect(() => {
        handleGetDataSpecialty();
    },[])
    useEffect(() => {
        specialties.map(
            (specialty, index) => {
                let option = {
                    value: specialty.id,
                    label: specialty.name
                }
                options.push(option);
                    
            }
        );
        console.log(options);
    },[specialties])
    useEffect(() => {
        if (selectedSpecialty) {
            setNameSpecialty(selectedSpecialty.name);
            setAvatar(selectedSpecialty.avatar);
            setAvatarPreview(selectedSpecialty.avatar);
            setContentMarkdown(selectedSpecialty.contentMarkdown);
            setContentHTML(selectedSpecialty.contentHTML);
            setDescription(selectedSpecialty.description);
        }
    }, [selectedSpecialty])
    




    

    
        
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
        // this.setState({
        //     avatarPreview: object,
        //     avatar: base64
        // })
        setAvatarPreview(object);
        setAvatar(base64);
    }
}

let handleSaveSpeciality = async() => {
    // await createNewSpeciality({
    //     name: this.state.nameSpecialty,
    //     contentHTML: this.state.contentHTML,
    //     contentMarkdown: this.state.contentMarkdown,
    //     avatar: this.state.avatar,
    // })
    console.log('save: ', {
        name: nameSpecialty,
        contentHTML: contentHTML,
        contentMarkdown: contentMarkdown,
        avatar: avatar,
        isOpen: isOpen,
        description: description
    });

}
let validate = () => {
    if (nameSpecialty === '') {
        toast.error("T??n chuy??n khoa kh??ng ???????c ????? tr???ng");
        return false;
    }
    if (avatar === '') {
        toast.error("???nh ?????i di???n kh??ng ???????c ????? tr???ng");
        return false;
    }
    if (contentMarkdown === '') {
        toast.error("N???i dung kh??ng ???????c ????? tr???ng");
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
        

let handleChange = (selectedDoctor) => {
    setSelectedSpecialty(selectedDoctor);
    console.log(`Option selected:`, selectedDoctor);
    let specialty = specialties.find(specialty => specialty.id == selectedDoctor.value);
    
    setNameSpecialty(specialty.name);
    setContentHTML(specialty.contentHTML);
    setContentMarkdown(specialty.contentMarkdown);
    setAvatar(specialty.avatar);
    setAvatarPreview(specialty.avatar);
    setIsOpen(specialty.isOpen);
    setDescription(specialty.description);

    
};
    return (
    <div className="manage-doctor-container">
                <div className="manage-doctor-container__header text-center">
                    <h3>S???a chuy??n khoa</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                    <label>T??n chuy??n khoa</label>
                    <Select
                                value={selectedSpecialty}
                                onChange={handleChange}
                                options={
                                    options
                                }
                            />
                    </div>
                    <div className="col-6">
                    <div className="col-6">
                        <label>Ch???n ???nh</label>
                                <input type="file" className="form-control" id="up-photo" hidden
                                    onChange={(e) => {
                                        handleOnChangeImage(e)
                                    }}
                                    name="avatar"
                                    value={avatar}
                                ></input>
                                <div className="upload"><label htmlFor="up-photo" className="upload-text"> <i className="fa-solid fa-arrow-up-from-bracket icon-upload"></i> T???i ???nh</label></div>
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
                    <label>M?? t???</label>
                    <textarea className="form-control" rows="6" onChange={(e)=>{handleChangeInput(e)}} name="description" value={description}></textarea>
                    </div>
                <div  className="col-6">
                    <label>Xem tr?????c ???nh</label>
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
                <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}
                value={contentMarkdown} 
                />       
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <button className="btn btn-primary" 
                onClick={
                    handleSaveSpeciality
                }
                >L??u</button>
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
export default SpecialtyManagerEdit;