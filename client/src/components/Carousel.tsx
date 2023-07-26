
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"
import Typography from '@mui/material/Typography';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div className='bannerContainer1 imagePosition'>
                <Typography variant="h2" className="title1">
                Luxury SUV1
                </Typography>
            </div>
            <div className='bannerContainer2 imagePosition'>                
                <Typography variant="h2" className="title2">
                Luxury SUV2
                </Typography>
            </div>
            <div className='bannerContainer3 imagePosition'>
            <Typography variant="h2" className="title3">
            Luxury SUV3
                </Typography>
            </div>
        </Slider>
    );
};

export default Carousel;
