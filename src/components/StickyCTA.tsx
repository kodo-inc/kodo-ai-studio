"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    obs.observe(contact);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-md transition-transform duration-300 ${
        hide ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <div className="hidden text-sm sm:flex sm:items-center sm:gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-medium text-gray-900">ご相談 受付中</span>
          <span className="text-gray-500">/ 30分</span>
        </div>
        <a
          href="#contact"
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-[#6848E5] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5638d3]"
        >
          無料で相談する <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
