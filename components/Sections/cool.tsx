import Image from "next/image";

export default function Cool() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 md:py-16 lg:py-20 font-roboto">
      <div className="flex w-full flex-col items-center justify-between gap-10 px-6 md:flex-row lg:px-20">

        <div className="w-full md:w-[55%] xl:w-[60%]">
          <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#0F172A] md:text-6xl lg:text-[4.5rem]">
            All the cool{" "}
            <span className="relative z-0 inline-block">
              features
              <Image
                src="/vector.png"
                alt="Highlight underline"
                width={260}
                height={20}
                className="absolute -bottom-2 left-0 -z-10 w-full translate-y-[20%] object-contain lg:-bottom-3 lg:w-[110%]"
              />
            </span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:w-[90%] lg:text-xl">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
            In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
            quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
            viverra a, neque orci.
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700 lg:text-lg"
          >
            View all the features
            <svg 
              className="h-5 w-5 transition-transform group-hover:translate-x-1" 
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

       
      
        <div className="relative mt-10 flex w-full justify-center md:mt-0 md:w-[45%] xl:w-[40%] md:justify-end">
       
          <span className="pointer-events-none absolute right-12 top-4 select-none text-2xl font-bold text-yellow-400 lg:right-24">+</span>
          <span className="pointer-events-none absolute right-28 top-14 h-3 w-3 select-none rounded-full bg-yellow-400 lg:right-40" />
          <span className="pointer-events-none absolute right-16 top-24 h-2 w-2 select-none rounded-full bg-yellow-400 lg:right-20" />
          <span className="pointer-events-none absolute bottom-16 right-10 select-none text-lg font-bold text-yellow-400 lg:right-20">×</span>
          <span className="pointer-events-none absolute bottom-32 right-32 h-2.5 w-2.5 select-none rounded-full bg-yellow-400 lg:right-48" />

          <Image
            src="/Right.png"
            alt="Cool features preview"
            width={800}
            height={720}
            className="w-full max-w-[550px] object-contain lg:max-w-[700px] xl:max-w-[800px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}