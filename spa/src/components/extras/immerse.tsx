"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Booking from "../booking/booking";

const images = [
  "/images/scrub-3.jpg",
  "/images/sauna-3.jpg",
  "/images/massage-2.jpg",
  "/images/pool.jpg",
];

export default function IMMERSE() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextImage = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: string) => ({
      x: isMobile ? (direction === "right" ? "100%" : "-100%") : 0,
      scale: isMobile ? 1 : 0.9,
      opacity: isMobile ? 0 : 0.7,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: string) => ({
      x: isMobile ? (direction === "right" ? "-100%" : "100%") : 0,
      scale: isMobile ? 1 : 0.9,
      opacity: isMobile ? 0 : 0.7,
      transition: { duration: 0.3 },
    }),
  };

  const gap = 20;
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('/images/grass-2.jpg')] before:absolute before:inset-0 before:bg-black/70 before:z-0 pt-10 md:pt-14 px-4"
    >
      <div className="z-10 w-full max-w-6xl mx-auto">
        <div className="w-full">
          <h1 className="font-activa text-xl md:text-3xl lg:text-4xl/snug text-center sm:text-start text-amber-50 mb-8">
            <span className="lg:ml-24 md:ml-14 sm:block">
              IMMERSE YOURSELF IN AN ATMOSPHERE
            </span>{" "}
            OF COMFORT AND STYLE
          </h1>

          {/* Carousel Container */}
          <div className="relative h-[500px] w-full overflow-hidden">
            {/* Desktop Layout */}
            <div className="relative w-full h-[400px] overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                // Calculate the proper index wrapping around the array
                const index =
                  (currentIndex + offset + images.length) % images.length;

                // Set positioning:
                // - The center (active) image is 50% width and centered (left: 25%)
                // - The previous image is full width, positioned so its right quarter is visible (left: -25%)
                // - The next image is full width, positioned so its left quarter is visible (left: 75%)
                let style = {};
                if (offset === 0) {
                  // Center image: subtract full gap from width and push it inward by half the gap
                  style = { left: `calc(25% + ${gap / 2}px)`, width: `calc(50% - ${gap}px)` };
                } else if (offset === -1) {
                  // Previous image: move right by half the gap and reduce width
                  style = { left: `calc(-25% + ${gap / 2}px)`, width: `calc(100% - ${gap}px)` };
                } else if (offset === 1) {
                  // Next image: move right by half the gap and reduce width
                  style = { left: `calc(75% + ${gap / 2}px)`, width: `calc(100% - ${gap}px)` };
                }

                return (
                  <div
                    key={index}
                    className="absolute top-0 h-full transition-all duration-300 flex gap-5"
                    style={style}
                  >
                    <Image
                      src={images[index]}
                      alt={`Spa image ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl shadow-xl"
                    />
                    {offset === 0 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                        >
                          &lt;
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                        >
                          &gt;
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Layout */}

            {isMobile && (
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 h-full w-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(_, { offset, velocity }) => {
                    if (offset.x > 50 || velocity.x > 500) prevImage();
                    if (offset.x < -50 || velocity.x < -500) nextImage();
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={images[currentIndex]}
                      alt={`Spa image ${currentIndex + 1}`}
                      fill
                      className="object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Mobile Pagination */}
          {isMobile && (
            <div className="flex justify-center space-x-2 mt-4 md:hidden">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all w-full ${
                    idx === currentIndex ? "bg-white/80" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <Booking main={true} />
      </div>
    </motion.section>
  );
}
