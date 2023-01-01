import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col xs={12} md={4} className="py-4 d-flex align-items-center justify-content-center">TechBaseLogo</Col>
                <Col xs={12} md={4} className="py-4 d-flex align-items-center justify-content-center">&copy; copyright</Col>
                <Col xs={12} md={4} className="py-4 d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon className="me-2" icon={faFacebook} />
                    <FontAwesomeIcon className="me-2" icon={faInstagram} />
                    <FontAwesomeIcon className="me-2" icon={faTwitter} />
                </Col>
            </Row>
        </Container>
    )
}

