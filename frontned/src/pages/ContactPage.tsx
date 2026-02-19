import { motion } from "framer-motion";
import { Clock3, Globe, MessageCircleMore, PhoneCall } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";




const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-[140px] pb-20">
        <Contact />
      </div>


      <Footer />
    </div>
  );
};

export default ContactPage;
