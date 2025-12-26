"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith("/en");

  function toggleLanguage() {
    if (isEnglish) {
      // remove /en
      router.push(pathname.replace(/^\/en/, "") || "/");
    } else {
      // add /en
      router.push(`/en${pathname}`);
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-semibold hover:opacity-80 transition"
    >
      {isEnglish ? "PT" : "EN"}
    </button>
  );
}
