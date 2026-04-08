"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jummy",
    role: "Financial Counselor",
    avatar: "/hj.jpg",
    color: "bg-amber-200",
  },
  {
    text: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    avatar: "/re.jpg",
    color: "bg-slate-200",
  },
  {
    text: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    avatar: "/hej.jpg",
    color: "bg-pink-200",
  },
  {
    text: "Semper duis purus faucibus interdum. Nec volutpat venenatis amet, risus proin. Pulvinar lectus velit, duis sit amet consequat nunc. Pellentesque habitant morbi tristique senectus et netus.",
    name: "David Kim",
    role: "Software Engineer",
    avatar: "/r4.jpg",
    color: "bg-blue-200",
  },
  {
    text: "Feugiat et ultrices posuere cubilia curae proin. Amet luctus venenatis lectus magna fringilla. Integer in posuere vel pharetra tincidunt. Platea dictumst vestibulum rhoncus est pellentesque.",
    name: "Sara Wilson",
    role: "Biology Lecturer",
    avatar: "/r5.jpg",
    color: "bg-green-200",
  },
];

const VISIBLE = 3;

export default function Review() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () =>
    setCurrent((c) => Math.min(reviews.length - VISIBLE, c + 1));

  const canPrev = current > 0;
  const canNext = current < reviews.length - VISIBLE;

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#1e2d3d] md:text-5xl">
            What everyone says
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors
                ${canPrev
                  ? "border-orange-400 text-orange-400 hover:bg-orange-50"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={!canNext}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors
                ${canNext
                  ? "border-orange-400 text-orange-400 hover:bg-orange-50"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 8px)))` }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex w-[calc(33.333%-12px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <p className="mb-8 text-[15px] leading-relaxed text-gray-600">
                  {review.text}
                </p>

                <div className="flex items-center gap-4">
                  {/* ✅ FIXED HERE */}
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-[#1e2d3d]">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: reviews.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-orange-400" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}