import React from "react";
import { useTranslation } from "react-i18next";
import TopNav from "./TopNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRegLightbulb, FaRegHeart, FaRegComments } from "react-icons/fa6";

// أيقونات لكل شريحة
const swiperIcons = [
  <FaRegLightbulb size={40} className="text-yellow-400 drop-shadow" />,
  <FaRegHeart size={40} className="text-pink-400 drop-shadow" />,
  <FaRegComments size={40} className="text-purple-400 drop-shadow" />,
];

// تدرجات متغيرة لكل شريحة
const gradients = [
  "from-yellow-200 via-pink-100 to-purple-100",
  "from-pink-200 via-purple-50 to-yellow-100",
  "from-purple-100 via-pink-50 to-yellow-100"
];

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const swiperKeys = [
    "heroSwiper.importance1",
    "heroSwiper.importance2",
    "heroSwiper.importance3"
  ];

  return (
    <section className="max-w-2x2 bg-white relative overflow-hidden pb-10">
      {/* خلفية لونية متداخلة عصرية من القرن الألف */}
<div
  className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
  aria-hidden="true"
>
  {/* موجة SVG متداخلة */}
  <svg
    className="absolute left-1/2 top-0 -translate-x-1/2 md:w-[180vw] w-[260vw] h-[120vh] opacity-70 blur-2xl"
    width="1440"
    height="900"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ minWidth: '100vw', minHeight: '100vh' }}
  >
    <defs>
      <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fee2f8" />
        <stop offset="30%" stopColor="#e0e7ff" />
        <stop offset="70%" stopColor="#fef9c3" />
        <stop offset="100%" stopColor="#a5b4fc" />
      </linearGradient>
    </defs>
    <path
      d="
        M 0 200
        Q 360 450 700 250
        T 1440 400
        V 900
        H 0
        Z
      "
      fill="url(#wave-gradient)"
      opacity="0.7"
    />
    <ellipse
      cx="1080"
      cy="300"
      rx="320"
      ry="140"
      fill="#e9d5ff"
      opacity="0.45"
    />
    <ellipse
      cx="360"
      cy="100"
      rx="200"
      ry="80"
      fill="#ffe4e6"
      opacity="0.40"
    />
    <ellipse
      cx="700"
      cy="800"
      rx="700"
      ry="220"
      fill="#fef9c3"
      opacity="0.32"
    />
  </svg>
</div>

      {/* خلفيات دائرية زخرفية */}
      <div className="absolute -top-16 -left-24 w-72 h-72 bg-pink-100/70 rounded-full blur-3xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute -bottom-28 right-0 w-96 h-80 bg-purple-100/70 rounded-full blur-3xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute left-1/3 top-6 w-32 h-32 bg-pink-200/30 rounded-full blur-xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute right-1/4 bottom-0 w-28 h-28 bg-purple-200/40 rounded-full blur-xl pointer-events-none z-0 animate-floatY" />

      <TopNav />

      <div className="relative z-10 max-w-2x2 mx-auto mt-20 px-2 md:px-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          dir={isRTL ? "rtl" : "ltr"}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6800, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation={false}
          className="rounded-3xl !overflow-visible"
        >
          {swiperKeys.map((key, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 40 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col items-center justify-center min-h-[390px] relative"
              >
                {/* دائرة خلفية متدرجة نابضة بتدرج خاص لكل شريحة */}
                <motion.div
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0`}
                  initial={{ opacity: 0.55, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className={`w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br ${gradients[i % gradients.length]} rounded-full blur-2xl opacity-80 animate-pulse`} />
                </motion.div>

                {/* صندوق المحتوى الرئيسي مع glassmorphism */}
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 6px 38px 0 rgba(145,74,244,.09)" }}
                  className="relative z-10 bg-white/80 border border-purple-100 backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col items-center p-12 min-h-72 transition"
                >
                  {/* أيقونة داخل دائرة نابضة */}
                  <motion.div
                    whileHover={{ scale: 1.13, rotate: [0, 8, -8, 0] }}
                    transition={{ type: "spring", stiffness: 160, damping: 10 }}
                    className="mb-6 relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 blur-lg opacity-60 animate-pulse"></span>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center z-10 relative">
                      {swiperIcons[i]}
                    </div>
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center drop-shadow mb-3">
                    {t(key + ".title")}
                  </h2>
                  <div className="text-gray-700 text-lg md:text-xl text-center leading-relaxed font-medium">
                    {t(key + ".desc")}
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
