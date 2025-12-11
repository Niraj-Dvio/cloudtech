import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import BlogsPage from "./pages/Blogs";
import ContactUsPage from "./pages/ContactUs";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
