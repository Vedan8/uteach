import Image from "next/image";

export default function Cool() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:gap-8">

        {/* ════════════════════════════════
            LEFT — text content
        ════════════════════════════════ */}
        <div className="flex-1 max-w-lg">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#1e2d3d] md:text-5xl">
            All the cool{" "}
            <span className="relative inline-block">
              features
              <span className="absolute -bottom-1 left-0 w-full">
                <Image
                  src="/vector.png"
                  alt=""
                  width={200}
                  height={10}
                  className="w-full"
                />
              </span>
            </span>
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-600">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
            In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
            quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
            viverra a, neque orci.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600 hover:text-blue-700"
          >
            View all the features
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

        {/* ════════════════════════════════
            RIGHT — composite image
        ════════════════════════════════ */}
        <div className="relative flex-1 flex justify-center">
          {/* Yellow sparkle dots */}
          <span className="pointer-events-none absolute top-4 right-8 text-yellow-400 text-lg font-bold select-none">+</span>
          <span className="pointer-events-none absolute top-10 right-20 h-2.5 w-2.5 rounded-full bg-yellow-400 select-none" />
          <span className="pointer-events-none absolute top-16 right-10 h-1.5 w-1.5 rounded-full bg-yellow-400 select-none" />
          <span className="pointer-events-none absolute bottom-10 right-6 text-yellow-400 text-sm font-bold select-none">×</span>
          <span className="pointer-events-none absolute bottom-20 right-24 h-2 w-2 rounded-full bg-yellow-400 select-none" />

          <Image
            src="/Right.png"
            alt="Cool features preview"
            width={620}
            height={560}
            className="w-full max-w-[580px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}