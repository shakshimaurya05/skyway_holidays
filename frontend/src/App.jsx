import { Routes, Route } from "react-router-dom"
import PackageDetails from "./pages/PackageDetail"
import Home from "./pages/Home"
import DestinationPage from "./pages/DestinationPage"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Packages from "./pages/Packages.jsx"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
       <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
 <Route path="/holidays/:place" element={<DestinationPage />} />
<Route path="/package/:slug" element={<PackageDetails />} />
    </Routes>
  )
}

export default App