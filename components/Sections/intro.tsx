"use client";

import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-10 lg:px-20 font-roboto">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1 max-w-[850px] xl:max-w-[1000px]">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F172A] leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Teach</span>
                <Image
                  src="/vectort.png"
                  alt="underline"
                  width={200}
                  height={20}
                  className="absolute left-0 bottom-0 w-full h-auto translate-y-[25%] z-0 pointer-events-none"
                />
              </span>{" "}
              <span className="block sm:inline">students worldwide</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#0F172A] leading-relaxed">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors"
              >
                Sign Up Now
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-orange-600 font-semibold transition-colors"
              >
                <Image src="/play.png" alt="play icon" width={20} height={20} />
                View Demo
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <p className="text-sm text-gray-400 leading-tight">
                Trusted by <br className="hidden sm:block" />
                leading companies
              </p>

              <div className="flex items-center gap-4 sm:gap-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/company-logo-${i}.png`}
                    alt={`Company ${i}`}
                    width={28}
                    height={28}
                    className="opacity-40 grayscale"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/intro.png"
              alt="Teach students worldwide"
              width={625}
              height={545}
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[625px] h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;