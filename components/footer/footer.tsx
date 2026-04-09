import Image from "next/image";

type FooterItem = {
  label: string;
  badge?: string;
  arrow?: boolean;
};

type FooterColumn = {
  heading: string;
  items: FooterItem[];
};

const links: FooterColumn[] = [
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
      <div className="w-full px-6 py-12 md:px-12 md:py-24 lg:px-24">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-20">

          <div className="flex-shrink-0 md:w-48">
            <Image
              src="/footlogo.png"
              alt="uteach logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Changed grid-cols-2 to grid-cols-1 for the mobile stack */}
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
            {links.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-base font-semibold text-white md:mb-6 md:text-lg">
                  {col.heading}
                </p>

                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[15px] text-gray-400 transition-colors hover:text-white md:text-base"
                      >
                        {item.label}

                        {item.badge && (
                          <span className="rounded border border-purple-500 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-purple-300">
                            {item.badge}
                          </span>
                        )}

                        {item.arrow && (
                          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
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

      {/* Full width separator with matching padding */}
      <div className="w-full px-6 md:px-12 lg:px-24">
        <hr className="border-gray-800" />
      </div>

      {/* Changed flex-col items alignment to items-start for mobile */}
      <div className="flex w-full flex-col items-start justify-between gap-6 px-6 py-8 text-[15px] text-gray-400 sm:flex-row sm:items-center md:px-12 md:text-base lg:px-24">
        <p>uteach @ 2023. All rights reserved.</p>

        {/* Adjusted gaps and layout to fit the bottom row on one line as shown in the screenshot */}
        <div className="flex w-full flex-wrap items-center justify-between gap-y-4 sm:w-auto sm:justify-end sm:gap-6 md:gap-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            {/* Hidden Contact link on mobile to match the exact visual of your screenshot */}
            <a href="#" className="hidden transition-colors hover:text-white sm:block">Contact</a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <button className="flex items-center gap-1.5 transition-colors hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
              EN
            </button>

            <button className="flex items-center gap-1.5 transition-colors hover:text-white">
              EUR
            </button>

            <button
              aria-label="Accessibility"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-white hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="4" r="1.5" />
                <path d="M12 7c-2.8 0-5 .6-5 .6l1 2.4s1.5-.5 4-.5 4 .5 4 .5l1-2.4S14.8 7 12 7zm-3 4.5L8 20h2l1-5 1 5h2l-1-8.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}