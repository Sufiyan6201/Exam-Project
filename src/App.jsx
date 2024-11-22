import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";
import About from "./container/About";
import Blog from "./container/Blog";
import Cart from "./container/Cart";
import CheckOut from "./container/CheckOut";
import Contact from "./container/Contact";
import Services from "./container/Services";
import Shop from "./container/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
