"use client";

import { motion } from "framer-motion";
import Button from "@/components/button/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/images/home-4.jpg')] before:absolute before:inset-0 before:bg-black/50 before:z-0 pt-36">
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-white"
      >
        <div className="z-10 relative px-12">
          <h1 className="mb-8 lg:text-7xl md:text-5xl text-2xl text-amber-50 font-activa max-w-[900px]">
            WELLNESS SPA A SPACE FOR RELAXATION OF BODY AND SOUL
          </h1>
          <p className="md:text-lg text-amber-50 hidden sm:block">
            Discover a new source of energy and vitality.
          </p>
          <Button size="lg" className="mt-6 bg-black text-amber-50">
            Book a visit
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
