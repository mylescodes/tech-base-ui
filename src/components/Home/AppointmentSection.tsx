import { Container, Button } from "react-bootstrap"

export const AppointmentSection = () => {
  return (
    <Container className="d-flex justify-content-center p-5" fluid style={{ border: "solid black 2px"}}>
      <Button variant="outline-dark" size="lg">Schedule a consultation</Button>
    </Container>
    
  )
}