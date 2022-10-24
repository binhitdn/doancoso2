
import './scss/TopDoctor.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TopDoctor() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    };
    return (

        <div className="section-doctor-trend">
            <div class="section-specialties-title">
                <h4>Bác Sĩ Nổi Bật</h4>
                <a href="#">XEM THÊM</a>
            </div>
            <div className="specialty-content">
                <Slider {...settings}>
                        
                            <div className="img-customize" 
                               
                            >
                                <div className="section-doctor-trend-item">
                                    <div className="anh-bac-si" style={{
                                        background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                                    }}>

                                    </div>
                                </div>

                                <div className="name">
                                    <h6>Bac Bac si A</h6>
                                    <p>Khoa xương khớp</p>
                                </div>
                    </div>
                    <div className="img-customize" 
                               
                            >
                                <div className="section-doctor-trend-item">
                                    <div className="anh-bac-si" style={{
                                        background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                                    }}>

                                    </div>
                                </div>

                                <div className="name">
                                    <h6>Bac Bac si A</h6>
                                    <p>Khoa xương khớp</p>
                                </div>
                    </div>
                    <div className="img-customize" 
                               
                            >
                                <div className="section-doctor-trend-item">
                                    <div className="anh-bac-si" style={{
                                        background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                                    }}>

                                    </div>
                                </div>

                                <div className="name">
                                    <h6>Bac Bac si A</h6>
                                    <p>Khoa xương khớp</p>
                                </div>
                    </div>
                    <div className="img-customize" 
                               
                            >
                                <div className="section-doctor-trend-item">
                                    <div className="anh-bac-si" style={{
                                        background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                                    }}>

                                    </div>
                                </div>

                                <div className="name">
                                    <h6>Bac Bac si A</h6>
                                    <p>Khoa xương khớp</p>
                                </div>
                    </div>
                    <div className="img-customize" 
                               
                            >
                                <div className="section-doctor-trend-item">
                                    <div className="anh-bac-si" style={{
                                        background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                                    }}>

                                    </div>
                                </div>

                                <div className="name">
                                    <h6>Bac Bac si A</h6>
                                    <p>Khoa xương khớp</p>
                                </div>
                            </div>
                        
                </Slider>
            </div>
        </div>

    );
}
export default TopDoctor;