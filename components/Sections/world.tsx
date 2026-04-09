import Image from "next/image";

export default function World() {
  return (
    // Increased mobile padding (py-36) and desktop minimum heights (600px / 720px) to make the component taller
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FFC107] py-36 md:py-0 min-h-[700px] md:min-h-[1000px] lg:min-h-[900px]">

      {/* ════════════════════════════════════════════
          MOBILE layout — top + bottom strips
      ════════════════════════════════════════════ */}
      
      {/* Top avatars strip */}
      <div className="absolute left-0 top-0 w-full md:hidden">
        <Image
          src="/top-world.png"
          alt=""
          width={600}
          height={240}
          className="w-full object-cover object-top"
          priority
        />
      </div>

      {/* Bottom avatars strip */}
      <div className="absolute bottom-0 left-0 w-full md:hidden">
        <Image
          src="/bottom-world.png"
          alt=""
          width={600}
          height={240}
          className="w-full object-cover object-bottom"
        />
      </div>

      {/* ════════════════════════════════════════════
          DESKTOP layout — left / right strips
      ════════════════════════════════════════════ */}
      
      {/* Left avatars — absolute to left edge */}
      <div className="absolute left-0 top-1/2 hidden h-full w-[35%] -translate-y-1/2 md:block lg:w-[40%]">
        <Image
          src="/left-world.png"
          alt=""
          width={600}
          height={720}
          className="h-full w-full object-contain object-left"
          priority
        />
      </div>

      {/* Right avatars — absolute to right edge */}
      <div className="absolute right-0 top-1/2 hidden h-full w-[35%] -translate-y-1/2 md:block lg:w-[40%]">
        <Image
          src="/right-world.png"
          alt=""
          width={600}
          height={720}
          className="h-full w-full object-contain object-right"
          priority
        />
      </div>

      {/* ── Center text ── */}
      <div className="relative z-10 flex max-w-[540px] flex-col items-center px-6 text-center">
        <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-[#141517] md:text-5xl lg:text-[3.25rem] lg:leading-tight">
          Join a world of learning
        </h2>
        <p className="mb-10 text-base leading-relaxed text-[#141517]/80 md:text-lg lg:text-xl">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br className="hidden md:block" />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <a
          href="#"
          className="rounded-xl bg-[#ea580c] px-12 py-4 text-base font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-[#c2410c] lg:text-lg"
        >
          Sign Up Now
        </a>
      </div>

    </section>
  );
}