import Nav from "../../components/Nav";
import './style.css'
import {Container} from "react-bootstrap";
import EventRecap from "../../modules/event-recap";
import ClubMember from "../../modules/club-members";
import WinnerBlock from "../../modules/winner-block";
import Footer from "../../components/Footer";

const Index = ()=>{
    return(
        <>
            <Nav/>
            <div className='swiper'>
                <div className='hero-single'>
                    <Container>
                        <div className='hero-wrapper'>
                            <h2>Next Event: April 20th, Live From Myrtle Beach.</h2>
                            <p>One Day. 36 Golfers. Four Rounds. Only One Champion!</p>
                        </div>
                    </Container>

                </div>
            </div>
            <EventRecap/>
            <ClubMember/>
            <WinnerBlock/>
            <Footer/>
        </>
    )
}

export default Index