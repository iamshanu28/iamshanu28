import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Vite injects the configured `base` (e.g. "/portfolio/") here. Stripping the
// trailing slash gives React Router the basename it expects ("/portfolio").
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black">
        <div className="mx-auto w-full max-w-page">
          <Header />
          <div className="border-t border-black/15" aria-hidden="true" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
