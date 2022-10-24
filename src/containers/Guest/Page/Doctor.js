import { Link } from "react-router-dom";
import "./scss/Doctor.scss"
function Doctor() {
    return (
        <div class="doctor-page">
            <div class="doctor-page__header">
                <h4>Bác Sĩ</h4>
                <p>
                    CareHappy hỗ trợ bạn tìm kiếm những bác sĩ uy tín, chuyên nghiệp và nhiệt tình nhất.
                </p>
            </div>
            {/* <div class="doctor-page__search">
                <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Tìm bác sĩ" value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                        />
                </div>
            </div> */}
            <div class="doctor-page__content">
            <h4 class="doctor-title-outstanding">Bác sĩ nổi bật</h4>
                <div class="doctor-page__content__doctors">
                    
                    
                                
                                        <Link className="img-customize" 
                                        to={"doctors/"}
                                   
                                >
                                    <div className="section-doctor-trend-item">
                                       
                                        <div className="anh-bac-si" style={{
                                            background: `url("https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg")`
                                        }}>

                                        </div>
                                    </div>

                                    <div className="name">
                                        <h6 class="name-doctor">Tiến SĨ A</h6>
                                        <p>Khoa xương khớp</p>
                                        <span>Lượt xem: 0</span> 
                                        <span>Lượt khám: 0</span>
                                        <div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>

                                    </div>
                    </Link>
                    <Link className="img-customize" 
                                        to={"doctors/"}
                                   
                                >
                                    <div className="section-doctor-trend-item">
                                       
                                        <div className="anh-bac-si" style={{
                                            background: `url("https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg")`
                                        }}>

                                        </div>
                                    </div>

                                    <div className="name">
                                        <h6 class="name-doctor">Tiến SĨ A</h6>
                                        <p>Khoa xương khớp</p>
                                        <span>Lượt xem: 0</span> 
                                        <span>Lượt khám: 0</span>
                                        <div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>

                                    </div>
                    </Link>
                    <Link className="img-customize" 
                                        to={"doctors/"}
                                   
                                >
                                    <div className="section-doctor-trend-item">
                                       
                                        <div className="anh-bac-si" style={{
                                            background: `url("https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg")`
                                        }}>

                                        </div>
                                    </div>

                                    <div className="name">
                                        <h6 class="name-doctor">Tiến SĨ A</h6>
                                        <p>Khoa xương khớp</p>
                                        <span>Lượt xem: 0</span> 
                                        <span>Lượt khám: 0</span>
                                        <div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </Link>
                                
                           
                </div>
            </div>


        </div>
    );
}
export default Doctor;