import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WhatsAppButton({
  phone = "967712345678", // غيّر الرقم حسب الحاجة
  message,
}) {
  const { t, i18n } = useTranslation();
  // يمكنك تعيين رسالة افتراضية من ملف الترجمة
  const defaultMessage = t("whatsappMessage");
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message || defaultMessage)}`;

  // تحديد مكان الزر حسب اتجاه الصفحة
  const isRTL = i18n.dir() === "rtl";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed z-50 bottom-6
        ${isRTL ? "left-6" : "right-6"}
        bg-green-500 hover:bg-green-600
        shadow-2xl rounded-full p-4
        flex items-center justify-center
        transition-all duration-300
        group
        animate-[bounce_2.5s_infinite]
      `}
      aria-label={t("whatsappBtn")}
      style={{
        boxShadow: "0 6px 32px 0 #3bbd5088",
      }}
    >
      <FaWhatsapp size={32} className="text-white drop-shadow" />
      {/* Tooltip لطيف */}
      <span className={`
        absolute pointer-events-none
        ${isRTL ? "right-full mr-3" : "left-full ml-3"}
        bg-black bg-opacity-80 text-white px-3 py-1 rounded text-xs
        opacity-0 group-hover:opacity-100 transition-all duration-300
        whitespace-nowrap
      `}>
        {t("whatsappTooltip")}
      </span>
    </a>
  );
}
