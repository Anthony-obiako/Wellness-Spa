"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Wellness() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative md:h-screen h-full w-full flex items-center justify-center pt-6 md:pt-10 md:pb-8 "
    >
      <div className=" h-full flex justify-between items-center md:w-[85vw] w-full px-5 md:px-0 md:mr-6 bg-cover bg-center bg-[url('/images/home-3.jpg')] before:absolute before:inset-0 before:bg-black/40 before:z-0">
        <div className="w-full flex flex-col h-full   px-5 md:px-0 md:pt-14 md:mr-6 ">
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/100 from-20% via-black/90 via-70% to-transparent to-100%" />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/90 to-transparent" />
          <h1 className="font-activa text-xl md:text-3xl lg:text-4xl text-amber-50 md:mb-16 mb-8 z-10 w-full">
            <span className="lg:ml-20 md:ml-14 ml-5 block">
              A WELLNESS SPA COMPLEX{" "}
            </span>{" "}
            IN THE HEART OF WARSAW
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 8 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="flex flex-col max-h-[350px] h-full md:justify-between gap-8 z-10 mb-44 md:mb-0"
          >
            <motion.p
              variants={{
                hidden: { opacity: -90, y: 700 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-72 md:w-[350px] h-auto md:text-sm text-xs bg-white/20 backdrop-blur-lg md:py-6 px-3 py-4 md:px-[22px] rounded-2xl lg:ml-20"
            >
              We were inspired to create a space for true relaxation of body and
              soul, with a focus on the beloved slavic tradition of broom
              steaming
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: -90, y: 700 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-72 md:w-[350px] h-auto md:text-sm text-xs bg-white/20 backdrop-blur-lg md:py-6 px-3 py-4 md:px-[22px] rounded-2xl ml-auto"
            >
              AB Wellness is a comprehensive centre offering a range of
              services, including a hamman, Finish sauna, Russian steam room,
              relaxation area, jacuzzi, a terrace with a cold plunge pool, and
              an open fire
            </motion.p>
          </motion.div>
          <button
            type="submit"
            className="w-full px-8 rounded-full transition bg-[#f3e2d0] text-black py-3 text-sm font-medium md:w-fit z-10 lg:ml-20"
          >
            Find Out More
          </button>
        </div>
        <div className=" max-h-[900px] max-w-[550px] hidden h-full w-full z-10 md:flex items-center lg:justify-end mt-16 bg-gradient-to-l from-black/100 from-70% via-black/90 via-70% to-black/50 to-70% ">
          <Image
            src="/images/random-3.jpg"
            alt="wellness"
            width={500}
            height={900}
            className=" rounded-2xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}
