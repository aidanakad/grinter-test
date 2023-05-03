import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../assets/logo.png'
const MyNav = () =>{
    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='shadow-lg' sticky='top'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt={'logo'}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">WPL EVENT #2, 4/20</Nav.Link>
                        <Nav.Link href="#link">PLAYERS</Nav.Link>
                        <Nav.Link href="#link">PAST RESULT</Nav.Link>

                    </Nav>
                    <div className="d-flex membership-btn">
                        <a href="https://watch.proleaguenetwork.com/" target="_blank">LIVE STREAM</a>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default  MyNav