import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CategoriesBar } from "./components/CategoriesBar";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-page">
        <Header />
        <div className="border-t border-black/15" aria-hidden="true" />
        <Hero />
        <CategoriesBar />
        <WorkSection />
        <Footer />
      </div>
    </div>
  );
}
