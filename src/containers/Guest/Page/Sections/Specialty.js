import Slider from "react-slick";
import "./scss/Specialty.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtydata from "../../../../data/specialtydata";

function Specialty() {
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
        <div className="section-specialties">
                <div class="section-specialties-title">
                <h4>Chuyên khoa phổ biến</h4>
                <a href="#">XEM THÊM</a>
                </div>
                <div className="specialty-content">
                <Slider {...settings}>
            
                    
                    {specialtydata &&
                        specialtydata.map((item, index) => {
                            return (
                                <div className="img-customize" >
                    <div className="section-specialty-item">
                        <div style={{
                            background: `url(${item.image})`
                        }}>           
                            </div>
                                        <p>{item.name}</p>
                    </div>
                    </div>
                            )
                        }
                        )
                   }
                    
              
                

            
            

     
      
      
    </Slider>
                </div>
            </div>
    )
}
export default Specialty;