import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AbouUs";
import ContactUs from "../pages/ContactUs";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
