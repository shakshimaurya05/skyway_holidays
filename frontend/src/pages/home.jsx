import Navbar from "../components/navbar";
import Hero from "../components/hero";
import IndiaCarousel from "../components/IndiaCarousel";
import InternationalCarousel from "../components/InternCarousel";
import DestinationGuide from "../components/DestinationGuide";
import WhySkyway from "../components/WhySkyway";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <IndiaCarousel />
      <InternationalCarousel />
      <DestinationGuide />
      <WhySkyway />
      <Footer />
    </div>
  );
}

export default Home;