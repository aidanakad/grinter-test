import {Col, Container, Row} from "react-bootstrap";
import './style.css'
import winner from '../../assets/winner.png'
const WinnerBlock = () =>{
    return(
        <Container className='mt-5'>
            <Row>
                <Col>
                    <h2>Winner of the Last WPL Event</h2>
                    <div className="testimonial-content">
                        <h4>Gary Hester</h4>
                        <span>North Carolina</span>
                        <p>Teeing off his Mini Golf career in 1969, Gary has over 50 years of
                            experience in the sport. He started at the Arnold Palmer Mini Golf
                            course in High Point, NC, where he took home four straight
                            championships. In the USPMGA Masters, he has won multiple senior
                            divisions and has registered 11 top ten and two second place finishes in
                            the main draw. Gary has also represented the US National Mini Golf Team
                            at the World Mini Golf Championships for the last few years. In Sweden
                            he finished as the top American and finished third overall. </p>
                    </div>
                </Col>
                <Col>
                    <div className='winner-photo'>
                        <img src={winner} alt='winner' />
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default WinnerBlock