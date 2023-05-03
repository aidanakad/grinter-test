import {Container} from "react-bootstrap";
import Slider from "react-slick";
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import './style.css'
const ClubMember = () =>{

    const settings = {
        dots: true,
        fade: true,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <img src={next} />,
        prevArrow: <img src={back}  />,

    };
    return(
        <Container className='mt-5'>
            <Slider {...settings}>
                <div className='d-flex justify-content-center'>
                    <div className='single-facility'>
                        <img className='guest' src={first}/>
                        <div className='facility-inner'>
                            <span>Kaz Brown</span>
                            <div className="circle">
                                <h4>On-Air Host from Pro League Network</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='single-facility'>
                        <img className='guest' src={second}/>
                        <div className='facility-inner'>
                            <span>Brian Katrek</span>
                            <div className="circle">
                                <h4>Tournament Commentator and Host of PGA TOUR Radio</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-center'>
                    <div className='single-facility'>
                        <img className='guest' src={third}/>
                        <div className='facility-inner'>
                            <span>Rob Pizzola</span>
                            <div className="circle">
                                <h4>Featured Guest</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </Slider>
        </Container>
    )
}

export default ClubMember