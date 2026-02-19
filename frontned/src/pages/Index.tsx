import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const skipLoader = (location.state as { skipLoader?: boolean } | null)?.skipLoader === true;

  return (
    <PageLoader skip={skipLoader}>
      <div className="min-h-screen bg-background text-foreground ferret-home">
        <Navbar />

        <Hero />

        <Services />
        <Contact />
        <Footer />
      </div>
    </PageLoader>
  );
};

export default Index;
