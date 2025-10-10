import { Route, Routes } from "react-router-dom";
import Preloader from "./layouts/Preloader";
import DevNotice from "./components/DevNotice";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Gallery from "./pages/gallery";
import Rooftop from "./pages/roofTop";
import Index from "./pages/index";
import Menu from "./pages/menu-restaurant";
import Reservation from "./pages/reservation";

const App = () => (
  <>
    <DevNotice />
    <Preloader />
    
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experience" element={<Rooftop />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>

  </>
);

export default App;
