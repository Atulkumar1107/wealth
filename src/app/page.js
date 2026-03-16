import HeroSection from "@/components/HeroSection";
import TerrainManifesto from "@/components/TerrainManifesto";
import ThetaStateSection from "@/components/ThetaStateSection";
import BotanicalCollection from "@/components/BotanicalCollection";
import ResourceCenter from "@/components/ResourceCenter";
import NatureSection from "@/components/NatureSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import StartSearch from "@/components/Create";
import Unclaim from "@/components/Unclam";
import RightPath from "@/components/RightPath";
import How from "@/components/How";
import Testimonials from "@/components/Testinomial";
import Blogs from "@/components/Blogs";
import FAQ from "@/components/FAQSection";
import Join from "@/components/Join";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <TerrainManifesto />
      <StartSearch />
      <Unclaim />
      <RightPath />
      <How />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Join/>
      <CTASection/>
    </main>
  );
}
