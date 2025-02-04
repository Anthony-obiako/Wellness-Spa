"use client";

import { motion } from "framer-motion";
import Button from "@/components/button/button";

export default function Hero() {;

  return (
    <section className="relative h-screen w-full flex justify-center bg-cover bg-center bg-[url('/images/home-4.jpg')] before:absolute before:inset-0 before:bg-black/30 before:z-0 pt-48">
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-white"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="z-10 relative px-12">
          <h1 className="mb-10 lg:text-7xl/tight md:text-5xl/tight text-2xl/normal text-white font-activa max-w-[1000px] ">
            AB WELLNESS
            <span className="block">
              A SPACE FOR RELAXATION OF BODY AND SOUL
            </span>
          </h1>
          <p className="md:text-lg text-amber-50 hidden sm:block">
            Discover a new source of energy and vitality.
          </p>
          <Button
            className="mt-6 bg-black text-amber-50 px-5 py-4 rounded-full"
            modalContent
          >
            Book a Visit
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
