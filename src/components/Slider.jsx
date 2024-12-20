import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Responsive({ children, cantidad }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: cantidad ? cantidad : 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        // cssEase: "linear",
        pauseOnHover: false,
        arrows: false,

    };
    return (
        <div className="slider-container relative w-full">
            <Slider {...settings} autoplay={true}>
                {children}
            </Slider>
        </div>
    );
}


export default Responsive;
