import React from "react";
import { useTranslation } from "react-i18next";

export default function SpecialistSchedule() {
  const { t } = useTranslation();

  // جلب البيانات كمصفوفة من ملف الترجمة
  const schedule = t("specialistSchedule", { returnObjects: true });

  return (
    <section className="max-w-2xl mx-auto my-12 px-4 md:px-10 lg:px-24 py-8 bg-white rounded-3xl shadow-lg border border-pink-100">

      <h2 className="text-2xl font-extrabold text-purple-800 mb-6 text-center">
        {t("specialistScheduleTitle")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedule.map((slot, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow p-4 border hover:shadow-lg transition-all"
          >
            <span className="font-bold text-lg text-purple-700 mb-1 md:mb-0">{slot.day}</span>
            <span className="text-base text-purple-800">
              {t("from")} <span className="font-bold">{slot.from}</span> {t("to")} <span className="font-bold">{slot.to}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
