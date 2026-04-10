"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/css/intro.module.css";

const Intro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Image
          src="/vectort.png"
          alt="underline"
          width={190}
          height={12}
          className={styles.underline}
        />

        <header className={styles.top}>
          <h1 className={styles.heading}>
            Teach students worldwide
          </h1>

          <p className={styles.description}>
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
            massa tincidunt viverra lectus pulvinar. Nunc ipsum est
            pellentesque turpis ultricies.
          </p>

          <div className={styles.buttons}>
            <Link href="" className={styles.primaryBtn}>
              Sign Up Now
            </Link>

            <Link href="" className={styles.secondaryBtn}>
              <Image src="/play.png" alt="play icon" width={24} height={24} className={styles.play}/>
              <span className={styles.view_video}>View Demo</span>
            </Link>
          </div>
        </header>

        <section className={styles.companies}>
          <p className={styles.trustedText}>
            Trusted by leading companies
          </p>

          <ul className={styles.company_logos}>
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <Image
                  src={`/company-logo-${i}.png`}
                  alt={`Company ${i}`}
                  width={28}
                  height={28}
                  className={styles.logo}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <figure className={styles.right}>
        <Image
          src="/intro.png"
          alt="Teach students worldwide"
          width={625}
          height={545}
          className={styles.heroImage}
          priority
        />
      </figure>
    </section>
  );
};

export default Intro;