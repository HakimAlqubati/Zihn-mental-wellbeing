import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo/logo-1.png";

export default function TopNav() {
  const { t, i18n } = useTranslation();
  const [supportOpen, setSupportOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لإغلاق القائمة عند تغيير الحجم أو الانتقال بين الصفحات
  useEffect(() => {
    const closeMenu = () => setMobileMenu(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_16px_0_rgba(180,120,255,0.10)] border-b border-purple-100"
          : "bg-white/40 backdrop-blur shadow-none border-b border-transparent"
        }`}
      style={{ willChange: "background, box-shadow, transform" }}
    >
      <div className={`
        container mx-auto flex items-center justify-between
        gap-4 px-4 md:px-8 w-full max-w-screen-xl transition-all duration-500
        ${scrolled ? "py-2" : "py-4"}
      `}>
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 transition-all duration-500">
          <img
            src={logo}
            alt="logo"
            className={`
              transition-all duration-500 rounded-xl shadow border border-purple-100
              ${scrolled ? "h-8 w-8" : "h-12 w-12"}
            `}
          />
          <div>
            <h1 className={`
              font-extrabold text-purple-800 transition-all duration-500
              ${scrolled ? "text-base md:text-lg" : "text-xl md:text-2xl"}
            `}>
              {t("brand")}
            </h1>
            <div className={`
              text-pink-600 font-semibold transition-all duration-500
              ${scrolled ? "text-xs" : "text-sm md:text-base"}
            `}>
              {t("subtitle")}
            </div>
          </div>
        </div>

        {/* === زر الهامبرجر للجوال فقط === */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-purple-100 shadow bg-white/80 hover:bg-purple-50 transition relative z-50"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-0.5 my-0.5 bg-purple-700 transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 my-0.5 bg-purple-700 transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 my-0.5 bg-purple-700 transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* ====== الروابط في الديسكتوب ====== */}
        <nav className="hidden md:flex flex-wrap gap-2 md:gap-4 items-center transition-all duration-500">
          <NavButton>{t("nav.main")}</NavButton>
          <div
            className="relative"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
            tabIndex={0}
          >
            <NavButton>
              {t("nav.support")}
              <span className="ml-1">{supportOpen ? "▲" : "▼"}</span>
            </NavButton>
            <div className={`absolute top-full right-0 min-w-[160px] bg-white shadow rounded-xl mt-2 border border-purple-50 z-20
                transition-all duration-150 ${supportOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
              <DropdownItem>{t("supportMenu.anxiety")}</DropdownItem>
              <DropdownItem>{t("supportMenu.depression")}</DropdownItem>
              <DropdownItem>{t("supportMenu.ocd")}</DropdownItem>
            </div>
          </div>
          <NavButton>{t("nav.blog")}</NavButton>
          <NavButton>{t("nav.contact")}</NavButton>
          {/* Call to action */}
          <a
            href="/booking"
            className="ml-3 px-6 py-2 rounded-2xl font-bold bg-gradient-to-l from-pink-500 to-purple-400 text-white shadow-md hover:scale-105 hover:bg-pink-600 transition-all duration-300 text-base"
          >
            {t("nav.bookNow")}
          </a>
        </nav>
        {/* زر اللغة */}
        <button
          onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
          className={`px-4 py-1 rounded-xl font-bold border border-purple-300 text-purple-700
            bg-white/80 hover:bg-purple-50 transition-all duration-300 text-base ml-2 shadow-sm
            ${scrolled ? "scale-95" : "scale-100"}
            hidden md:inline-block
          `}
        >
          {i18n.language === "ar" ? "EN" : "عربي"}
        </button>
      </div>

      {/* ====== قائمة الموبايل ====== */}
      <div className={`
        fixed top-0 left-0 w-full h-full z-40
        bg-black/30 backdrop-blur-sm
        transition-all duration-300
        ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        md:hidden
      `}
        onClick={() => setMobileMenu(false)}
      >
        <div
          className={`
            absolute top-3 right-3 left-3 mx-auto
            bg-white rounded-3xl shadow-2xl border border-purple-100
            flex flex-col items-center gap-5 py-8 px-6
            transition-all duration-300
            ${mobileMenu ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          `}
          style={{ maxWidth: 350 }}
          onClick={e => e.stopPropagation()} // عشان لا تغلق القائمة عند الضغط على العناصر
        >
          <NavButton onClick={() => setMobileMenu(false)}>{t("nav.main")}</NavButton>
          <NavButton onClick={() => setMobileMenu(false)}>{t("nav.blog")}</NavButton>
          <NavButton onClick={() => setMobileMenu(false)}>{t("nav.contact")}</NavButton>
          <div className="w-full">
            <div className="font-semibold text-purple-700 mb-2">{t("nav.support")}</div>
            <DropdownItem>{t("supportMenu.anxiety")}</DropdownItem>
            <DropdownItem>{t("supportMenu.depression")}</DropdownItem>
            <DropdownItem>{t("supportMenu.ocd")}</DropdownItem>
          </div>
          <a
            href="/booking"
            className="w-full mt-2 px-6 py-2 rounded-2xl font-bold bg-gradient-to-l from-pink-500 to-purple-400 text-white shadow-md text-center"
          >
            {t("nav.bookNow")}
          </a>
          {/* زر اللغة في الجوال */}
          <button
            onClick={() => {
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
              setMobileMenu(false);
            }}
            className="w-full px-4 py-1 rounded-xl font-bold border border-purple-300 text-purple-700
              bg-white/80 hover:bg-purple-50 transition-all duration-300 text-base shadow-sm mt-3"
          >
            {i18n.language === "ar" ? "EN" : "عربي"}
          </button>
        </div>
      </div>
    </header>
  );
}

function NavButton({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded-xl font-semibold text-purple-800 hover:bg-purple-100/80 transition-all duration-300 w-full md:w-auto"
      {...props}
    >
      {children}
    </button>
  );
}

function DropdownItem({ children }) {
  return (
    <div className="px-5 py-2 hover:bg-purple-50 cursor-pointer text-purple-800 text-base transition-all duration-300 w-full">
      {children}
    </div>
  );
}
