import Navbar from "../components/Navbar.jsx"
import Description from "../components/Description.jsx"
import GetStarted from "../components/GetStarted.jsx"
import FAQ from '../components/FAQList.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Description />
      <hr />
      <GetStarted />
      <hr />
      <FAQ />
    </>
  )
}