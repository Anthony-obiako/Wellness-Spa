"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Booking from "../booking/booking";

const services = [
  { title: "SCRUB", image: "/images/scrub-1.jpg" },
  { title: "STEAMING WITH BROOMS ", image: "/images/extra-3.jpg" },
  { title: "MASSAGE", image: "/images/scrub-4.jpg" },
  { title: "SALON RENTAL", image: "/images/random-4.jpg" },
];

export default function Additional() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.7, ease: "easeOut" }}
      className="relative h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('/images/grass-1.jpg')] before:absolute before:inset-0 before:bg-black/90 before:z-0 pt-10 md:pt-14 px-4"
    >
      <div className="z-10 -mr-2">
        <div className="w-full">
          <h1 className="font-activa text-xl md:text-3xl lg:text-4xl text-amber-50 lg:ml-20 md:ml-14 ml-7">
            ADDITIONAL SERVICES
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-4 mt-16 md:mt-20 md:mb-20 mb-14 lg:mb-28 lg:mt-24 min-w-[80vw]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative w-full h-52 md:h-72 lg:h-80 overflow-hidden rounded-3xl flex
                    ${index === 0 || index === 2 ? "-mt-12" : ""}`}
              >
            
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border-none w-full"
                />
            
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent flex items-end justify-center p-1">
                  <p className="text-sm md:text-lg lg:text-2xl text-center font-activa text-amber-50 w-full">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Booking main={false} />
      </div>
    </motion.section>
  );
}
