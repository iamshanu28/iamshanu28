import { Hero } from "../components/Hero";
import { CategoriesBar } from "../components/CategoriesBar";
import { WorkSection } from "../components/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesBar />
      <WorkSection />
    </>
  );
}
