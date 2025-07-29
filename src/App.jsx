import { Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contacts from "./pages/contacts";
import Faq from "./pages/faq";
import Gallery from "./pages/gallery";
import Index from "./pages/index";
import Index2 from "./pages/index-2";
import MenuCoffee from "./pages/menu-coffee";
import Reservation from "./pages/reservation";
import Preloader from "./layouts/Preloader";

const App = () => (
  <>
    <Preloader />
    <Layouts>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/index-2" element={<Index2 />} />
        <Route path="/menu-coffee" element={<MenuCoffee />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Layouts>
  </>
);

export default App;
