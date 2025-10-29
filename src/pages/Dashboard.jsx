import Navbar from "../components/Navbar.jsx"
import DasboardNavbar from "../components/DashboardNavbar.jsx"
import DashboardOutput from "../components/DashboardOutput.jsx"
import ProfileCheckWrapper from "../components/ProfileCheckWrapper.jsx"

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <DasboardNavbar />
      <ProfileCheckWrapper>
        <DashboardOutput />
      </ProfileCheckWrapper>
    </>
  )
}