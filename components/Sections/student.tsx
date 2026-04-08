import Image from "next/image";

export default function Student() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:gap-16">

        {/* ════════════════════════════════
            LEFT — staggered photo gallery
        ════════════════════════════════ */}
        <div className="relative flex flex-shrink-0 items-end gap-3 md:gap-4">

          {/* Column 1 — 2 photos, shifted DOWN */}
          <div className="flex flex-col gap-3 pt-20">
            <Image
              src="/col1.png"
              alt="Students"
              width={160}
              height={420}
              className="w-36 rounded-2xl object-cover shadow-sm md:w-44"
            />
          </div>

          {/* Column 2 — 3 photos, starts at top */}
          <div className="flex flex-col gap-3">
            <Image
              src="/col2.png"
              alt="Students"
              width={160}
              height={580}
              className="w-36 rounded-2xl object-cover shadow-sm md:w-44"
            />
          </div>

          {/* Column 3 — 3 photos, shifted UP */}
          <div className="flex flex-col gap-3 -mt-10">
            <Image
              src="/col3.png"
              alt="Students"
              width={160}
              height={580}
              className="w-36 rounded-2xl object-cover shadow-sm md:w-44"
            />
          </div>

          {/* Column 4 — 2 photos, middle height */}
          <div className="flex flex-col gap-3 pt-8">
            <Image
              src="/col4.png"
              alt="Students"
              width={160}
              height={420}
              className="w-36 rounded-2xl object-cover shadow-sm md:w-44"
            />
          </div>
        </div>

        {/* ════════════════════════════════
            RIGHT — text content
        ════════════════════════════════ */}
        <div className="max-w-lg">
          {/* Aeroplane icon */}
          <div className="mb-4 flex justify-end">
            <Image
              src="/aeroplane.png"
              alt="Aeroplane icon"
              width={72}
              height={60}
              className="w-16 md:w-20"
            />
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#1e2d3d] md:text-5xl">
            Meet international
            <br />
            students &amp; teachers
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-600">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
            risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
            aenean lorem faucibus integer.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600 hover:text-blue-700"
          >
            Explore teachers and students
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}