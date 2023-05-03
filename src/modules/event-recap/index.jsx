import './style.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import players from '../../assets/people.png'
import video from '../../assets/video-img.png'

const EventRecap = () =>{
    return(
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} className='text-start'>
                    <div className={'title'}>
                        <h2>Recap of World Putting League Event</h2>
                        <h4>Hawaii Rumble in Myrtle Beach, South Carolina, February 27-28, 2023.</h4>
                    </div>

                    <p className='recap-txt'>
                        US National Mini Golf Team member Gary Hester (+550 field) won the inaugural World
                        Putting League Championship at Hawaiian Rumble Minigolf in Myrtle Beach, S.C. after
                        shooting a final round 31 for 5 under par to defeat Matt McCaslin (33, 3 under par; +190
                        pre-tournament to win) and take home the $5,000 championship purse.
                        <br></br>
                        <br></br>
                        Hester finished the Day 1 qualifying rounds by shooting 32 (-4) and 31 (-5),
                        respectively, to combine for 9 under par and the No. 2 seed heading into the Day 2 match
                        play bracket. After Day 1, Hester’s odds to win moved to +420.
                        <br></br>
                        <br></br>
                        Hester defeated Rick Alessi with a 35 (-1) in the quarterfinals before squeaking by Joey
                        Graybeal in the semifinals by one stroke, 32 (-4) to 33 (-3). Graybeal entered the Day 2
                        quarterfinals as the top seed (-350 to win after Day 1) after pacing the field with a
                        combined -9 in the two qualifying rounds.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <img src={players} alt='people' className='players'/>
                </Col>
            </Row>
            <Row>
                <Col >
                    <a href="https://player.vimeo.com/video/804104059" target='_blank' className="video-area">
                        <img src={video} alt='logo'/>
                    </a>
                </Col>
                <Col className='align-self-center'>
                            <figure className="bg-white p-3 rounded shadow-lg" style={{borderLeft: '.25rem solid #EFD912'}}>
                                <blockquote className="blockquote pb-2">
                                    <p>
                                        These athletes devote countless hours to perfect their game and and finally had their chance to showcase their talents to the world. There couldn't be a better inaugural champion than Gary Hester, a mainstay at USPMGA events for decades.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 font-italic">
                                    Bob Detwiler, USPMGA Commissioner
                                </figcaption>
                            </figure>
                </Col>
            </Row>
        </Container>
    )
}

export default EventRecap