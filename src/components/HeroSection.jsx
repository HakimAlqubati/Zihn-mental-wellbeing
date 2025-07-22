import React from "react";
import { useTranslation } from "react-i18next";
import TopNav from "./TopNav";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// أيقونات احترافية من react-icons
import { FaRegLightbulb, FaRegHeart, FaRegComments } from "react-icons/fa6";

// أيقونات لكل شريحة
const swiperIcons = [
  <FaRegLightbulb size={36} className="text-yellow-400 drop-shadow" />,
  <FaRegHeart size={36} className="text-pink-400 drop-shadow" />,
  <FaRegComments size={36} className="text-purple-400 drop-shadow" />,
];

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // مفاتيح الترجمة لكل شريحة
  const swiperKeys = [
    "heroSwiper.importance1",
    "heroSwiper.importance2",
    "heroSwiper.importance3"
  ];

  return (
    <section className="max-w-2x2 bg-white relative overflow-hidden pb-10">
      {/* خلفيات دائرية ملونة وزخرفية */}
      <div className="absolute -top-16 -left-24 w-72 h-72 bg-pink-100/70 rounded-full blur-3xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute -bottom-28 right-0 w-96 h-80 bg-purple-100/70 rounded-full blur-3xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute left-1/3 top-6 w-32 h-32 bg-pink-200/30 rounded-full blur-xl pointer-events-none z-0 animate-floatY" />
      <div className="absolute right-1/4 bottom-0 w-28 h-28 bg-purple-200/40 rounded-full blur-xl pointer-events-none z-0 animate-floatY" />

      {/* شريط التصفح العلوي */}
      <TopNav />

      {/* سويبر احترافي */}
      <div className="relative z-10 max-w-2x2 mx-auto mt-20 px-2 md:px-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          dir={isRTL ? "rtl" : "ltr"}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="rounded-3xl"
        >
          {swiperKeys.map((key, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                {/* دائرة خلفية متدرجة اللون */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-full blur-3xl animate-pulse opacity-80"></div>
                </div>
                <div className="relative z-10 bg-white/90 border border-purple-100 backdrop-blur rounded-3xl shadow-2xl flex flex-col items-center p-10 min-h-72 transition hover:scale-[1.025] hover:shadow-purple-200 duration-300">
                  {/* الأيقونة */}
                  <div className="mb-4">{swiperIcons[i]}</div>
                  {/* العنوان */}
                  <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center drop-shadow mb-3">
                    {t(key + ".title")}
                  </h2>
                  {/* الوصف */}
                  <div className="text-gray-700 text-lg md:text-xl text-center leading-relaxed">
                    {t(key + ".desc")}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
