import Navbar from "../components/Navbar.jsx"
import DasboardNavbar from "../components/DashboardNavbar.jsx"
import CareerOptionsList from "../components/CareerOptionsList.jsx"
import ProfileCheckWrapper from "../components/ProfileCheckWrapper.jsx"

export default function CareerRecommendations() {
  return (
    <>
      <Navbar />
      <DasboardNavbar />
      <ProfileCheckWrapper />
      <CareerOptionsList />
    </>
  )
}