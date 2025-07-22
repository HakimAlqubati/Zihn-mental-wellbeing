import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo/logo-1.png"; // تأكد من المسار

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-tr from-purple-100 via-pink-50 to-white border-t border-purple-100 pt-10 pb-4 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo & About */}
        <div className="flex-1 flex flex-col gap-3 mb-8 md:mb-0">
          <img src={logo} alt="logo" className="h-14 w-14 rounded-xl shadow border border-purple-100 mb-2" />
          <div className="font-extrabold text-2xl text-purple-800 mb-1">{t("footer.brand")}</div>
          <p className="text-purple-600 text-base leading-relaxed max-w-xs">{t("footer.about")}</p>
        </div>

        {/* وسائل التواصل */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-lg font-bold text-purple-800 mb-2">{t("footer.contactTitle")}</div>
          <div className="flex gap-3 mb-2">
            <a href="https://wa.me/XXXXXXXXXX" className="footer-icon" aria-label="واتساب"><FaWhatsapp /></a>
            <a href="https://twitter.com/yourpage" className="footer-icon" aria-label="تويتر"><FaTwitter /></a>
            <a href="https://facebook.com/yourpage" className="footer-icon" aria-label="فيسبوك"><FaFacebook /></a>
            <a href="https://instagram.com/yourpage" className="footer-icon" aria-label="انستجرام"><FaInstagram /></a>
          </div>
          <div className="text-purple-600 text-sm">
            <div>
              <span className="font-semibold">{t("footer.whatsapp")}:</span>{" "}
              <a href="https://wa.me/XXXXXXXXXX" className="hover:underline">+967XXXXXXXXX</a>
            </div>
            <div>
              <span className="font-semibold">{t("footer.email")}:</span>{" "}
              <a href="mailto:info@zihn.com" className="hover:underline">info@zihn.com</a>
            </div>
          </div>
        </div>

        {/* النشرة البريدية */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-lg font-bold text-purple-800 mb-2">{t("footer.newsletterTitle")}</div>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              className="rounded-xl border border-purple-200 p-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder={t("footer.emailPlaceholder")}
            />
            <button
              type="submit"
              className="rounded-xl px-6 py-2 bg-gradient-to-l from-pink-400 to-purple-500 text-white font-bold shadow hover:scale-105 transition"
            >
              {t("footer.subscribe")}
            </button>
          </form>
          <div className="text-xs text-purple-400 mt-2">{t("footer.noSpam")}</div>
        </div>
      </div>

      {/* روابط الشروط وحقوق النشر */}
      <div className="border-t border-purple-50 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 gap-2 text-purple-400 text-sm">
        <div>
          <a href="/privacy" className="hover:underline">{t("footer.privacy")}</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="hover:underline">{t("footer.terms")}</a>
        </div>
        <div>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
      {/* بعض الأنماط الخاصة */}
      <style>{`
        .footer-icon {
          font-size: 1.5rem;
          color: #a21caf;
          background: #f3e8ff;
          border-radius: 50%;
          padding: 8px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .footer-icon:hover {
          background: #e9d5ff;
          color: #e11d48;
          transform: scale(1.15);
        }
      `}</style>
    </footer>
  );
}
