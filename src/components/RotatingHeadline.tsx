"use client";

import { useEffect, useState } from "react";

const words = [
  "AIの導入支援",
  "AIアプリ制作",
  "爆速ホームページ制作",
  "デジタル化支援",
];

const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

const INITIAL_HOLD_MS = 5000;
const ROTATE_INTERVAL_MS = 2800;

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      setIndex(1);
      interval = setInterval(() => {
        setIndex((i) => (i + 1) % words.length);
      }, ROTATE_INTERVAL_MS);
    }, INITIAL_HOLD_MS);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <span className="relative inline-block align-bottom">
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longest}で
      </span>
      {words.map((w, i) => (
        <span
          key={w}
          aria-hidden={i !== index}
          className={`absolute left-0 top-0 whitespace-nowrap font-bold text-black transition-all duration-700 ease-out ${
            i === index
              ? "translate-y-0 opacity-100 blur-0"
              : "pointer-events-none -translate-y-3 opacity-0 blur-[2px]"
          }`}
        >
          {w}で
        </span>
      ))}
    </span>
  );
}
