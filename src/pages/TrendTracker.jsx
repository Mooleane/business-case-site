import Navbar from "../components/Navbar.jsx"
import DasboardNavbar from "../components/DashboardNavbar.jsx"
import TrendOutput from "../components/TrendOutput.jsx"
import ProfileCheckWrapper from "../components/ProfileCheckWrapper.jsx"

export default function TrendTracker() {
  return (
    <>
      <Navbar />
      <DasboardNavbar />
      <ProfileCheckWrapper />
      <TrendOutput />
    </>
  )
}