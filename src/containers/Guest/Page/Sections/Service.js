import Slider from "react-slick";
import "./scss/Service.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Service() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 778,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
       return (
        <div className="section-specialty">
                <div className="specialty-content">
                <Slider {...settings}>
      <div className="img-customize">
            <div className="section-specialty-item">
                <div style={{
                    background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                }}>               </div>
                <h4>Xét nghiệm COVID</h4>
                <ul>
                    <li>Tầm soát và xác định COVID-19</li>
                    <li>Phương pháp Test nhanh </li>
                    <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
                <a href="#">XEM THÊM <i className="fa-solid fa-share-from-square"></i></a>
            </div>
      </div>
      <div className="img-customize">
            <div className="section-specialty-item">
                <div style={{
                    background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                }}>               </div>
                <h4>Xét nghiệm COVID</h4>
                <ul>
                    <li>Tầm soát và xác định COVID-19</li>
                    <li>Phương pháp Test nhanh </li>
                    <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
                <a href="#">XEM THÊM <i className="fa-solid fa-share-from-square"></i></a>
            </div>
      </div>
      <div className="img-customize">
            <div className="section-specialty-item">
                <div style={{
                    background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                }}>               </div>
                <h4>Xét nghiệm COVID</h4>
                <ul>
                    <li>Tầm soát và xác định COVID-19</li>
                    <li>Phương pháp Test nhanh </li>
                    <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
                <a href="#">XEM THÊM <i className="fa-solid fa-share-from-square"></i></a>
            </div>
      </div>
      <div className="img-customize">
            <div className="section-specialty-item">
                <div style={{
                    background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                }}>               </div>
                <h4>Xét nghiệm COVID</h4>
                <ul>
                    <li>Tầm soát và xác định COVID-19</li>
                    <li>Phương pháp Test nhanh </li>
                    <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
                <a href="#">XEM THÊM <i className="fa-solid fa-share-from-square"></i></a>
            </div>
      </div>
      <div className="img-customize">
            <div className="section-specialty-item">
                <div style={{
                    background: `url('https://cdn.bookingcare.vn/fo/2022/08/02/232252-cam-bien-dau-doc-freestyle-libre.jpg')`
                }}>               </div>
                <h4>Xét nghiệm COVID</h4>
                <ul>
                    <li>Tầm soát và xác định COVID-19</li>
                    <li>Phương pháp Test nhanh </li>
                    <li>Theo quy chuẩn Bộ Y tế</li>
                </ul>
                <a href="#">XEM THÊM <i className="fa-solid fa-share-from-square"></i></a>
            </div>
      </div>
      
      
    </Slider>
                </div>
            </div>
    )
}
export default Service;