"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "@/app/css/review.module.css";
import { reviews } from "@/app/data/reviewData";

export default function Review() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.review}>
      <header className={styles.row}>
        <h2 className={styles.heading}>What everyone says</h2>

        <div className={styles.arrows}>
          <Image
            src={"/left_arrow.png"}
            alt="arrow"
            height={48}
            width={48}
            className={styles.arrow}
            onClick={scrollLeft}
          />
          <Image
            src={"/right_arrow.png"}
            alt="arrow"
            height={48}
            width={48}
            className={styles.arrow}
            onClick={scrollRight}
          />
        </div>
      </header>

      <ul className={styles.slider} ref={sliderRef}>
        {reviews.map((user, index) => (
          <li key={index} className={styles.card}>
            <p className={styles.text}>{user.text}</p>

            <div className={styles.user}>
              <Image
                src={user.avatar}
                alt={user.name}
                width={64}
                height={64}
                className={styles.avatar}
              />
              <div>
                <h4 className={styles.name}>{user.name}</h4>
                <p className={styles.role}>{user.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}