import {Col, Nav, Row} from "react-bootstrap";
import logo from '../assets/logo.png'
import inst from '../assets/icons8-instagram-24.png'
import fb from '../assets/icons8-facebook-30.png'
import tw from '../assets/icons8-twitter-30.png'
const Footer = () =>{
    return (
        <>
            <Row className='bg-dark h-75 p-5'>
                <Col >
                    <img src={logo} alt={'logo'}/>
                    <div className='mt-5'>
                        <img src={inst} width={30} height={30}/> <span className='text-bg-light'>|</span>
                        <img src={fb}/> <span className='text-bg-light'>|</span>
                        <img src={tw}/>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex flex-column gap-2 links align-items-start'>
                        <a href="#home">Home</a>
                        <a href="#link">WPL EVENT #2, 4/20</a>
                        <a href="#link">PLAYERS</a>
                        <a href="#link">PAST RESULT</a>
                    </div>

                </Col>
                <Col>
                    <p className='footer-txt'>World Putting League is sanctioned by the <b><a href="prominigolf.com">USPMGA</a></b> (US
                        Pro MiniGolf Association) and produced by <b><a href="proleaguenetwork.com">Pro League
                            Network</a></b></p>
                </Col>
            </Row>
        </>
    )
}

export default Footer