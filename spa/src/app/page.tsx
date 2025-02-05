
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import IMMERSE from "@/components/extras/immerse";
import Additional from "@/components/additional-services/additional";
import Footer from "@/components/footer/footer"
import Wellness from "@/components/extras/wellness";
import Oasis from "@/components/extras/oasis";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Wellness />
      <Additional />
      <Oasis />
      <IMMERSE />
      <Footer />
    </div>
  );
}
