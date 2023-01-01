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
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}