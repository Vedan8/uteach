import Image from "next/image";
import styles from "@/app/css/cool.module.css"

export default function Cool() {
  return (
    <section className={styles.allinone}>
      <div className={styles.info}>
        <h2 className={styles.heading}>
          All the cool{" "}
          <span className={styles.headingWrapper}>
            features
            <Image
              src={"/vector.png"}
              alt="underline"
              height={12}
              width={246}
              className={styles.underline}
            />
          </span>
        </h2>

        <p className={styles.paragraph}>
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
        </p>

        <a href="#" className={styles.button}>
          <p className={styles.button_text}>View all the features</p>
          <Image
            src={"/arrow.png"}
            alt="arrow"
            height={24}
            width={24}
            className={styles.arrow}
          />
        </a>
      </div>

      <figure className={styles.imageWrapper}>
        <Image
          src={"/Right.png"}
          height={600}
          width={479}
          alt="group"
          className={styles.group}
        />
      </figure>
    </section>
  );
}