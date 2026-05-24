import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/sections/Hero";
import Issues from "@/components/sections/Issues";
import UseCases from "@/components/sections/UseCases";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Works from "@/components/sections/Works";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Issues />
        <UseCases />
        <Services />
        <WhyUs />
        <Works />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
