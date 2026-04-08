import Image from "next/image";

const checkItems = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

// Responsive Sparkles
const sparkles = [
  { className: "-top-[2%] left-[15%] md:top-[8%] md:-left-[5%]", size: 8 },
  { className: "top-[5%] left-[45%] md:top-[18%] md:-left-[2%]", size: 5 },
  { className: "top-[15%] left-[5%] md:top-[35%] md:-left-[12%]", size: 10 },
  { className: "top-[22%] left-[30%] md:top-[60%] md:-left-[5%]", size: 6 },
  { className: "top-[8%] left-[85%] md:top-[75%] md:-left-[10%]", size: 7 },
  { className: "top-[30%] left-[75%] md:top-[85%] md:-left-[5%]", size: 5 },
];

const plusMarks = [
  { className: "-top-[8%] left-[30%] md:top-[12%] md:-left-[12%]" },
  { className: "top-[10%] left-[65%] md:top-[45%] md:-left-[18%]" },
  { className: "top-[25%] left-[10%] md:top-[70%] md:-left-[8%]" },
];

export default function AllInOneSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 md:py-10 lg:py-14">
      {/* Removed max-width for extreme left/right stretching. 
        Reduced gaps to half. 
      */}
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:gap-5 lg:px-10">

        {/* ════════════════════════════════
            LEFT — text content
        ════════════════════════════════ */}
        <div className="relative z-20 w-full shrink-0 md:w-[55%] lg:w-[60%] xl:w-[65%]">
          {/* Added lg:whitespace-nowrap to force single line on laptops. Margins halved. */}
          <h2 className="mb-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1a2431] sm:text-4xl lg:whitespace-nowrap lg:text-5xl xl:text-[56px]">
            An{" "}
            <span className="relative inline-block text-[#1a2431]">
              all-in-one
              {/* orange underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full md:-bottom-2"
                viewBox="0 0 260 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 C50 2, 130 2, 258 5"
                  stroke="#F5A623"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            app that makes it easier
          </h2>

          <ul className="mb-5 space-y-2 xl:space-y-3">
            {checkItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-gray-600 sm:text-base xl:text-lg">
                <svg
                  className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#1a2431] xl:h-5 xl:w-5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.5 8.5l3.5 3.5 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#3b82f6] transition-colors hover:text-blue-700 sm:text-base xl:text-lg"
          >
            Find more about the app
            <svg 
              className="h-4 w-4 transition-transform group-hover:translate-x-1 xl:h-5 xl:w-5" 
              viewBox="0 0 16 16" 
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* ════════════════════════════════
            RIGHT — blob + group image
        ════════════════════════════════ */}
        <div className="relative flex w-full justify-end md:w-[45%] lg:w-[40%] xl:w-[35%]">

          {/* Scattered yellow dots */}
          {sparkles.map((s, i) => (
            <span
              key={`sparkle-${i}`}
              className={`pointer-events-none absolute rounded-full bg-[#FFC107] ${s.className}`}
              style={{
                width: s.size,
                height: s.size,
              }}
            />
          ))}

          {/* Plus marks */}
          {plusMarks.map((p, i) => (
            <span
              key={`plus-${i}`}
              className={`pointer-events-none absolute text-xl font-light leading-none text-[#FFC107] xl:text-2xl ${p.className}`}
            >
              +
            </span>
          ))}

          {/* Orange blob - inset-y-0 forces it to exactly match the image container height */}
          <div className="pointer-events-none absolute inset-y-0 -left-[20%] z-0 w-[120%] sm:-left-[30%] md:-left-[50%] lg:-left-[60%] lg:w-[150%]">
            <Image
              src="/blob.png"
              alt=""
              fill
              className="object-contain object-left md:object-right"
              priority
            />
          </div>

          {/* Group image (browser + cards) - Stays on the right, text will never overlap this */}
          {/* <div className="relative z-10 w-[90%] sm:w-[90%] md:w-full lg:max-w-[700px] xl:max-w-[900px]"> */}
          <div className="relative z-10 w-[90%] sm:w-[90%] md:w-full lg:max-w-[700px] xl:max-w-[900px]">
            <Image
              src="/group.png"
              alt="App preview with course cards"
              width={1200}
              height={900}
              className="h-auto w-full drop-shadow-sm"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}