// src/components/BlogSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
export default function BlogSection() {
  const { t } = useTranslation();

  // جلب بيانات المدونات من ملف الترجمة
  const blogs = t("blogs", { returnObjects: true });

  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
        {t("blogTitle", "مدونة ذهن للإستشارات")}
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="rounded-3xl"
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08, type: "spring" }}
              viewport={{ once: true, amount: 0.6 }}
               >
            <div className="rounded-2xl bg-white border border-purple-100 shadow-md p-6 flex flex-col gap-4 h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src={'http://localhost:5173/src'+blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-xl mb-3 border"
              />
              <h3 className="text-xl font-bold text-purple-700 group-hover:text-pink-500 transition">
                {blog.title}
              </h3>
              <p className="text-base text-gray-700 line-clamp-3">{blog.text}</p>
              <span className="text-xs text-gray-400 mt-auto">{blog.date}</span>
              {/* زر قراءة المزيد (اختياري) */}
              {/* <button className="self-end text-sm mt-2 text-purple-600 hover:underline">
                {t("readMore", "اقرأ المزيد")}
              </button> */}
            </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
