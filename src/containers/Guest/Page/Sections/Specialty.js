import Slider from "react-slick";
import "./scss/Specialty.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Specialty() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return (
        <div className="section-specialties">
                <div class="section-specialties-title">
                <h4>Chuyên khoa phổ biến</h4>
                <a href="#">XEM THÊM</a>
                </div>
                <div className="specialty-content">
                <Slider {...settings}>
            
                    <div className="img-customize" >
                    <div className="section-specialty-item">
                        <div style={{
                            background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                        }}>           
                            </div>
                        <p>Khoa khoa</p>
                    </div>
                    </div>
                    <div className="img-customize" >
                    <div className="section-specialty-item">
                        <div style={{
                            background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                        }}>           
                            </div>
                        <p>Khoa khoa</p>
                    </div>
                    </div>
                    <div className="img-customize" >
                    <div className="section-specialty-item">
                        <div style={{
                            background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                        }}>           
                            </div>
                        <p>Khoa khoa</p>
                    </div>
                    </div>
                    <div className="img-customize" >
                    <div className="section-specialty-item">
                        <div style={{
                            background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                        }}>           
                            </div>
                        <p>Khoa khoa</p>
                    </div>
              </div>
                

            
            

     
      
      
    </Slider>
                </div>
            </div>
    )
}
export default Specialty;