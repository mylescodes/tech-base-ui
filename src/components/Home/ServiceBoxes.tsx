import { Container, Row, Col, Button } from 'react-bootstrap';

export const ServiceBoxes = () => {
    return (
        <Container fluid className="mb-5">
            <Row>
                <Col xs={12} md={6} lg={4} className="p-5 service-box-text">
                    <Container fluid className="p-4">
                        <h2 className="fw-bold">Web Development</h2>
                        <p>Though our design and social media teams flourish with imaginative ideas, our programming team has taken their technique to an art-form.</p>
                        <Button variant="outline-light">LEARN MORE</Button>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={4} className="service-box-image service-box-image-1"></Col>
                <Col xs={12} md={6} lg={4} className="p-5 service-box-text">
                    <Container fluid className="p-4">
                        <h2 className="fw-bold">SEO</h2>
                        <p>We do what is necessary, as well as what is usually missed. Our code is structured for SEO, as well as our knowledgable programmers validating existing code to be successful.</p>
                        <Button variant="outline-light">LEARN MORE</Button>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={4} className="service-box-image service-box-image-2"></Col>
                <Col xs={12} md={6} lg={4} className="p-5 service-box-text">
                    <Container fluid className="p-4">
                        <h2 className="fw-bold">Digital Marketing</h2>
                        <p>To drive industry-leading results with high quality scores, we start with carefully researched keywords, well-written ads, and precision targeted demographics.</p>
                        <Button variant="outline-light">LEARN MORE</Button>
                    </Container>
                </Col>
                <Col xs={12} md={6} lg={4} className="service-box-image service-box-image-3"></Col>
            </Row>
        </Container>
    )
}
