// src/components/TestimonialsSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";


import img from "../assets/logo/logo-1.png";
export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-pink-600 tracking-tight">
        {t("testimonialsTitle")}
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        // navigation
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {testimonials.map((item, i) => {
          const imgUrl = img;
          return (
              <SwiperSlide key={i}>
                <div className="absolute -top-6 left-2 text-pink-200 text-7xl opacity-60 pointer-events-none select-none">
                &ldquo;
                </div>
              <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08, type: "spring" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-pink-100 via-purple-50 to-white border-4 border-pink-300 flex items-center justify-center shadow-lg relative group transition">
                  <img
                    src={imgUrl}
                    alt={item.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-pink-400 shadow-inner group-hover:scale-105 transition duration-300"
                  />
                </div>
                <span className="mt-3 text-pink-700 font-bold text-lg">
                  {item.name}
                </span>
                <p className="text-gray-800 text-center text-base md:text-lg leading-relaxed px-3 font-medium">
                  “{item.text}”
                </p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
