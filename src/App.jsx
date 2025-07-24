import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SpecialistSchedule from "./components/SpecialistSchedule";
import WhatsAppButton from "./components/WhatsAppButton";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";

const sliderImages = [img1, img2, img3, img4];

const LANGUAGE_KEY = "zihn-lang";

export default function App() {
  const { t, i18n } = useTranslation();
  const [slide, setSlide] = useState(0);
 

  // جلب المحتوى من ملف الترجمة (وليس الكود)
  const sliderContent = t("sliderContent", { returnObjects: true });
  const cardsData = t("cardsData", { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 font-sans"
         style={{ direction: t("dir"), fontFamily: "Cairo, Rubik, sans-serif" }}>
      {/* Header */}
      <HeroSection />

      {/* Main Landing */}
      <main className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 pt-2">
        {/* Slider */}
        <div className="flex-1 flex justify-center">
          <div
            className="rounded-3xl overflow-hidden border-2 border-pink-100 bg-white shadow-lg hover:scale-105 transition-all duration-300"
            style={{ width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={sliderImages[slide]}
              alt="main"
              className="w-full h-full object-cover transition-all duration-300"
              style={{ filter: "brightness(0.98) saturate(1.09)" }}
            />
          </div>
        </div>
        {/* Main Text */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-2 tracking-tight">
            {sliderContent[slide].title}
          </h2>
          <p className="text-lg md:text-xl text-purple-700 mb-4 text-center md:text-right font-medium" style={{minHeight: 68}}>
            {sliderContent[slide].desc}
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-pink-400 hover:to-purple-500 transition text-white px-10 py-2.5 rounded-xl text-lg font-bold shadow hover:scale-105 duration-200">
            {t("bookNow")}
          </button>
          {/* Slider Dots */}
          <div className="flex gap-2 mt-8">
            {sliderImages.map((_, i) => (
              <span
                key={i}
                onClick={() => setSlide(i)}
                className={`w-4 h-4 rounded-full cursor-pointer border-2 duration-150
                  ${slide === i ? "bg-gradient-to-tr from-purple-500 to-pink-400 border-purple-500 scale-110 shadow" : "bg-pink-100 border-pink-200"}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pt-4 pb-10">
        {cardsData.map((card, i) => (
         <div
          key={i}
          className={`
            rounded-3xl bg-white border border-purple-50 p-7 flex flex-col gap-4
            shadow-md
            hover:shadow-2xl
            hover:bg-gradient-to-br hover:from-purple-50 hover:via-pink-50 hover:to-white
            hover:-translate-y-1
            hover:scale-[1.04]
            transition-all duration-300
            group
          `}
        >
          <h3 className={`
            text-xl font-bold mb-2
            transition-all duration-300
            text-purple-700
            group-hover:text-pink-600
          `}>
            {card.title}
          </h3>
          <div className="text-base md:text-lg font-medium min-h-[70px] text-purple-800 transition-all duration-300">
            {card.text}
          </div>
          {/* <button className={`
            px-5 py-1.5 rounded-xl self-end font-bold shadow-sm
            bg-purple-100 text-purple-700
            hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white
            transition-all duration-300
            group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:text-white
          `}>
            {card.btn}
          </button> */}
        </div>

        ))}
      </section>
      <TestimonialsSection />
      <BlogSection />
      <SpecialistSchedule />
      <WhatsAppButton phone="00967773030069" />


      {/* Footer */}
      <Footer />
    </div>
  );
}
