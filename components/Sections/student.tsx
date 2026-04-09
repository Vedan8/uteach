import Image from "next/image";

export default function Student() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-24 font-roboto">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-16 px-6 md:flex-row md:px-12 lg:px-24">
        
        <div className="relative flex w-full flex-shrink-0 justify-center items-center gap-3 md:w-1/2 md:justify-start lg:gap-5">

          <div className="flex flex-col gap-3 pt-24">
            <Image
              src="/col1.png"
              alt="Students"
              width={180}
              height={420}
              className="w-32 rounded-2xl object-cover shadow-sm md:w-40 lg:w-25"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/col2.png"
              alt="Students"
              width={180}
              height={580}
              className="w-32 rounded-2xl object-cover shadow-sm md:w-40 lg:w-25"
            />
          </div>

          <div className="flex flex-col gap-3 -mt-16 lg:-mt-24">
            <Image
              src="/col3.png"
              alt="Students"
              width={180}
              height={580}
              className="w-32 rounded-2xl object-cover shadow-sm md:w-40 lg:w-25"
            />
          </div>

          <div className="flex flex-col gap-3 pt-12 lg:pt-16">
            <Image
              src="/col4.png"
              alt="Students"
              width={180}
              height={420}
              className="w-32 rounded-2xl object-cover shadow-sm md:w-40 lg:w-25"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl md:w-1/2">
          
          <h2 className="relative mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#141517] md:text-5xl lg:text-[3.5rem]">
           
            <span className="absolute -top-8 right-[10%] lg:-top-12 lg:right-[40%]">
              <Image
                src="/aeroplane.png"
                alt="Aeroplane icon"
                width={72}
                height={60}
                className="w-12 md:w-16 lg:w-[72px]"
              />
            </span>
            Meet international students &amp; teachers
          </h2>

          <p className="mb-10 text-base leading-relaxed text-gray-600 md:text-lg lg:max-w-xl lg:pr-8">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
            risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
            aenean lorem faucibus integer.
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore teachers and students
            <svg 
              className="h-4 w-4 transition-transform group-hover:translate-x-1" 
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

      </div>
    </section>
  );
}