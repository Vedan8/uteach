import Image from "next/image";

export default function Tools() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f6f9] py-20 sm:py-24 lg:py-28 font-roboto">

      {/* LEFT BLOB (Shifted further down) */}
      <div className="pointer-events-none absolute left-0 top-24 sm:top-32  h-full w-[280px] sm:w-[380px] md:w-[480px] lg:w-[520px] z-0">
        <Image
          src="/left-yellow.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT BLOB */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] z-0">
        <Image
          src="/right-yellow.png"
          alt=""
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 flex flex-col items-center">

        {/* HEADING */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#1a2431] leading-tight">
  All the{" "}
  {/* Added z-0 to establish a stacking context */}
  <span className="relative z-0 inline-block">
    tools
    <Image
      src="/vector.png"
      alt="Highlight"
      width={120}
      height={14}
      // Added -z-10 to push the image exactly behind the text
      className="absolute left-0 bottom-0 -z-10 w-full translate-y-[30%] object-contain"
    />
  </span>{" "}
  that you need
</h2>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-[700px] text-center text-sm sm:text-base md:text-lg text-[#6b7280] leading-relaxed">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris.
          <br className="hidden sm:block" />
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>

        {/* MOCKUP */}
        <div className="relative mt-14 lg:mt-20 w-full flex justify-center z-20">
          <div className="w-full max-w-[720px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1250px] bg-white rounded-xl sm:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
            
            {/* Window Header */}
            <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-50">
              
              {/* Mac Controls */}
              <div className="flex space-x-1.5 sm:space-x-2 z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              
              {/* Address Bar */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#f4f6f8] rounded sm:rounded-md px-4 py-1.5 sm:py-2 w-[180px] sm:w-[320px] lg:w-[400px] flex justify-center">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium">uteach.com</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-2 sm:space-x-4 text-gray-400 z-10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Gradient Body */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-[#e5efff] via-[#e9dbfc] to-[#f8dbe8]"></div>
          </div>
        </div>

        {/* DASHED LINES */}
        <div className="relative -mt-2 sm:-mt-4 w-full max-w-[700px] md:max-w-[880px] lg:max-w-[1080px] xl:max-w-[1220px] flex justify-center z-10 pointer-events-none">
          <Image
            src="/lines.png"
            alt="Connecting lines"
            width={1200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ICONS */}
        <div className="relative -mt-1 sm:mt-0 w-full max-w-[700px] md:max-w-[880px] lg:max-w-[1080px] xl:max-w-[1220px] flex justify-center z-20">
          <Image
            src="/apps.png"
            alt="Supported apps"
            width={1200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}