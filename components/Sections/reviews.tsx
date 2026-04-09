"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jummy",
    role: "Financial Counselor",
    avatar: "/hj.jpg",
  },
  {
    text: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    avatar: "/re.jpg",
  },
  {
    text: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    avatar: "/hej.jpg",
  },
  {
    text: "Semper duis purus faucibus interdum. Nec volutpat venenatis amet, risus proin. Pulvinar lectus velit, duis sit amet consequat nunc. Pellentesque habitant morbi tristique senectus et netus.",
    name: "David Kim",
    role: "Software Engineer",
    avatar: "/r4.jpg",
  },
  {
    text: "Feugiat et ultrices posuere cubilia curae proin. Amet luctus venenatis lectus magna fringilla. Integer in posuere vel pharetra tincidunt. Platea dictumst vestibulum rhoncus est pellentesque.",
    name: "Sara Wilson",
    role: "Biology Lecturer",
    avatar: "/r5.jpg",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive logic to determine how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);      // Mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // Tablet
      else if (window.innerWidth < 1280) setVisibleCount(3); // Small Desktop
      else setVisibleCount(4);                              // Large Desktop
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () =>
    setCurrent((c) => Math.min(reviews.length - visibleCount, c + 1));

  const canPrev = current > 0;
  const canNext = current < reviews.length - visibleCount;

  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Container stretches full width with edge padding */}
      <div className="w-full px-6 md:px-12 lg:px-20">

        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#141517] md:text-5xl lg:text-[3.5rem]">
            What everyone says
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors lg:h-14 lg:w-14
                ${canPrev
                  ? "border-orange-400 text-orange-400 hover:bg-orange-50"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg className="h-5 w-5 lg:h-6 lg:w-6" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={!canNext}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors lg:h-14 lg:w-14
                ${canNext
                  ? "border-orange-400 text-orange-400 hover:bg-orange-50"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg className="h-5 w-5 lg:h-6 lg:w-6" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden pt-4 pb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${current} * (100% / ${visibleCount})))` 
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                // Calculates precise width based on how many cards should be visible
                style={{ width: `calc(100% / ${visibleCount})` }}
                className="flex-shrink-0 px-3 lg:px-4"
              >
                <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow lg:p-10">
                  <p className="mb-10 text-base leading-relaxed text-gray-600 lg:text-lg">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-5">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="h-14 w-14 rounded-full object-cover lg:h-16 lg:w-16"
                    />

                    <div>
                      <p className="text-lg font-bold text-[#141517] lg:text-xl">{review.name}</p>
                      <p className="text-[15px] text-gray-500 lg:text-base">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: Math.max(1, reviews.length - visibleCount + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-orange-400" : "w-2.5 bg-gray-200"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}