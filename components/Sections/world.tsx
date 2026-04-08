import Image from "next/image";

export default function World() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFC107] py-16 md:py-0 md:min-h-[480px]">

      {/* ════════════════════════════════════════════
          MOBILE layout — top + bottom strips
      ════════════════════════════════════════════ */}

      {/* Top avatars strip — mobile only */}
      <div className="mb-6 block md:hidden">
        <Image
          src="/top-world.png"
          alt=""
          width={400}
          height={160}
          className="w-full object-contain"
          priority
        />
      </div>

      {/* ════════════════════════════════════════════
          DESKTOP layout — left / center / right
      ════════════════════════════════════════════ */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between md:min-h-[480px]">

        {/* Left avatars — desktop only */}
        <div className="hidden md:block md:w-[38%] lg:w-[36%]">
          <Image
            src="/left-world.png"
            alt=""
            width={520}
            height={480}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* ── Center text ── */}
        <div className="z-10 flex flex-col items-center px-4 text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:w-[420px]">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1e2d3d] md:text-4xl lg:text-5xl">
            Join a world of learning
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[#1e2d3d]/80 md:text-base">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br className="hidden md:block" />
            Risus elit et fringilla habitant ut facilisi.
          </p>
          <a
            href="#"
            className="rounded-xl bg-[#e8500a] px-10 py-4 text-base font-bold text-white shadow-md hover:bg-[#d44509] transition-colors"
          >
            Sign Up Now
          </a>
        </div>

        {/* Right avatars — desktop only */}
        <div className="hidden md:block md:w-[38%] lg:w-[36%]">
          <Image
            src="/right-world.png"
            alt=""
            width={520}
            height={480}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom avatars strip — mobile only */}
      <div className="mt-6 block md:hidden">
        <Image
          src="/bottom-world.png"
          alt=""
          width={400}
          height={160}
          className="w-full object-contain"
        />
      </div>

    </section>
  );
}