import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Booking from "@/components/booking/booking";
import { main } from "framer-motion/client";
import Additional from "@/components/additional-services/additional";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Additional />
      <Booking main={true} />
    </div>
  );
}
