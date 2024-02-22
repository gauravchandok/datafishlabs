import Image from "next/image";
import HeroSection from "./components/heroSecton";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyDataFish from "./components/WhyDataFish";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col mt-8 lg:mx-auto w-full">
      <HeroSection />
      <ExpertiseSection />
      <WhyDataFish />
      <Contact />
    </main>
  );
}
