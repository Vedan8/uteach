import Image from "next/image";

const links = [
  {
    heading: "Product",
    items: [
      { label: "Pricing" },
      { label: "Overview" },
      { label: "Browse" },
      { label: "Accessibility", badge: "BETA" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { label: "Brainstorming" },
      { label: "Ideation" },
      { label: "Wireframing" },
      { label: "Research" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Help Center" },
      { label: "Blog" },
      { label: "Tutorials" },
      { label: "FAQs" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Contact Us" },
      { label: "Developers" },
      { label: "Documentation" },
      { label: "Integrations" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About" },
      { label: "Press" },
      { label: "Events" },
      { label: "Request Demo", arrow: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-gray-300">

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:gap-8">

          {/* Logo */}
          <div className="flex-shrink-0 md:w-40">
            <Image
              src="/footlogo.png"
              alt="uteach logo"
              width={90}
              height={36}
              className="object-contain"
            />
          </div>

          {/* Nav columns */}
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
            {links.map((col) => (
              <div key={col.heading}>
                <p className="mb-5 text-sm font-semibold text-white">
                  {col.heading}
                </p>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                        {item.badge && (
                          <span className="rounded border border-purple-500 px-1.5 py-0.5 text-[10px] font-semibold text-purple-400">
                            {item.badge}
                          </span>
                        )}
                        {item.arrow && (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-gray-700" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 sm:flex-row">
        <p>uteach @ 2023. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-6">
          {/* Legal links */}
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>

          {/* Language */}
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
            </svg>
            EN
          </button>

          {/* Currency */}
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h12M4 12h10M6 17h8" strokeLinecap="round" />
            </svg>
            EUR
          </button>

          {/* Accessibility icon */}
          <button
            aria-label="Accessibility"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-600 hover:border-white hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="4" r="1.5" />
              <path d="M12 7c-2.8 0-5 .6-5 .6l1 2.4s1.5-.5 4-.5 4 .5 4 .5l1-2.4S14.8 7 12 7zm-3 4.5L8 20h2l1-5 1 5h2l-1-8.5" />
            </svg>
          </button>
        </div>
      </div>

    </footer>
  );
}