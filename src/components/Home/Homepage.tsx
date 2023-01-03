import { AppointmentSection } from "./AppointmentSection"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ServiceBoxes } from "./ServiceBoxes"

export const Homepage = () => {
  return (
    <>
      <Header />
      <ServiceBoxes />
      <AppointmentSection />
      <Footer />
    </>
    
  )
}