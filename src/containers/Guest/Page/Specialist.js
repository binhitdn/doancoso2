import { Link } from "react-router-dom";
import specialtydata from "../../../data/specialtydata";
import "./scss/Specialist.scss";
function Specialist() {
    return (

        <div class="special-page">
            <div class="special-page__header">
                <h4>Chuyên khoa</h4>
                <p>
                    CareHappy hỗ trợ bạn tìm kiếm các chuyên khoa y tế đa dạng,nhanh chóng và chính xác nhất.
                </p>
            </div>
            <div class="special-page__search">
                <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Tìm chuyên khoa" 
                        
                        />
                </div>
            </div>
            <div class="special-page__content">
                <div class="special-page__content__specialties">
                            
                    {
                        specialtydata && specialtydata.map((item, index) => {
                            return (
                                <div class="special-page__content__specialties__item"
                                >
                                <div class="div-special-background"
                                style={{background: `url(${item.image})`}}
                                >
                                 <Link to={`/specialities/`} className="view_specialty_detail">
                                     <div className="detail-btn">
                                        Xem chuyên khoa
                                     </div>
                                    </Link>       
                                </div>
                                    <p class="div-special-name">{ item.name}</p>
                            </div>
                            )
                        })
                        
                               }
                </div>
            </div>


        </div>
    );
}
export default Specialist;