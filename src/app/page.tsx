import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyPartner from "@/components/WhyPartner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-100 selection:bg-orange-brand/10 selection:text-orange-brand relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CoreValues />
        <Services />
        <Industries />
        <WhyPartner />
      </main>
      <Footer />
    </div>
  );
}
