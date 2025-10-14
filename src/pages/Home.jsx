import Navbar from "../components/Navbar.jsx"
import Description from "../components/Description.jsx"
import CallToAction from "../components/CallToAction.jsx"
import FAQ from '../components/FAQList.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Description />
      <hr />
      <CallToAction />
      <hr />
      <FAQ />
    </>
  )
}