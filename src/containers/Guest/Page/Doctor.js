import { Link } from "react-router-dom";
import "./scss/Doctor.scss"
import doctordata from "../../../data/doctordata";

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
                    
                    
                                
                    
                    
                    
                    
                {
                        doctordata && doctordata.map((item, index) => {
                            return (
                                <Link className="img-customize" 
                                        to={"doctors/"}
                                   
                                >
                                    <div className="section-doctor-trend-item">
                                       
                                        <div className="anh-bac-si" style={{
                                            background: `url(${item.image})`
                                        }}>

                                        </div>
                                    </div>

                                    <div className="name">
                                        <h6 class="name-doctor">{item.name }</h6>
                                        <p class="name-special">{item.specialty}</p>
                                        <span>Lượt xem: {item.view}</span>
                                        <span>Lượt đặt khám: {item.booked}</span>
                                        <div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </Link>
                            )
                        }
                        )
                    }
                                
                           
                </div>
            </div>


        </div>
    );
}
export default Doctor;