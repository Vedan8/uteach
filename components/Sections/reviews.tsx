"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/css/review.module.css";
import { reviews } from "@/app/data/reviewData";

export default function Review() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reviews.length - 1, c + 1));

  const canPrev = current > 0;
  const canNext = current < reviews.length - 1;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What everyone says</h2>
          <div className={styles.nav_controls}>
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`${styles.nav_btn} ${!canPrev ? styles.nav_btn_disabled : ""}`}
            >
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`${styles.nav_btn} ${!canNext ? styles.nav_btn_disabled : ""}`}
            >
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.slider_viewport}>
          <div
            className={styles.slider_track}
            style={{ transform: `translateX(calc(-${current} * var(--card-width)))` }}
          >
            {reviews.map((review, i) => (
              <div key={i} className={styles.card_wrapper}>
                <div className={styles.card}>
                  <p className={styles.review_text}>{review.text}</p>
                  <div className={styles.user_info}>
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      width={64} 
                      height={64} 
                      className={styles.avatar} 
                    />
                    <div>
                      <p className={styles.user_name}>{review.name}</p>
                      <p className={styles.user_role}>{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}