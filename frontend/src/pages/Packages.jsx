import HeroPackages from "../components/HeroPackages"
import PackageSearch from "../components/PackageSearch"
import IndiaCarousel from "../components/IndiaCarousel"
import InternationalCarousel from "../components/InternCarousel"
import DestinationGuide from "../components/DestinationGuide"
import HoneymoonCarousel from "../components/HoneymoonCarousel"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Packages() {
  return (
    <div>
         <Navbar />

      <HeroPackages />

      <PackageSearch/>

      <IndiaCarousel />

      <InternationalCarousel />

      <DestinationGuide />

      <HoneymoonCarousel />
       <Footer />

    </div>
  )
}

export default Packages