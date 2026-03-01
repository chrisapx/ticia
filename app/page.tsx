import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import Capabilities from "./components/Capabilities";
import Pricing from "./components/Pricing";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <Capabilities />
      <Pricing />
      <ContactSection />
      <Footer />
    </main>
  );
}
