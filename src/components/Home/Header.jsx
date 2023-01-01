import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <small className="text-muted">+1 (704) 584-9033 | info@onebricktech.com</small>
                    
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faFacebook} />
                        <FontAwesomeIcon className="me-3" icon={faInstagram} />
                        <FontAwesomeIcon className="me-3" icon={faTwitter} />
                    </Col>
                </Row>
            </Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TechBaseLogo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}