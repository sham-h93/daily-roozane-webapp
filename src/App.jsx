import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AbouUs";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
