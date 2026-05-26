import Link from "next/link";

const navItems = [
  { href: "#services", label: "サービス" },
  { href: "#why", label: "強み" },
  { href: "#works", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#process", label: "進め方" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center">
          <span className="text-base font-bold tracking-tight text-black md:text-[17px]">
            KODO SOLUTIONS
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#6848E5] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5638d3] md:inline-flex"
        >
          無料で相談する
        </a>
        <a
          href="#contact"
          className="rounded-full bg-[#6848E5] px-4 py-2 text-xs font-medium text-white md:hidden"
        >
          相談する
        </a>
      </div>
    </header>
  );
}
