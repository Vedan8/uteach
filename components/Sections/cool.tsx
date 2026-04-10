import Image from "next/image";
import styles from "@/app/css/cool.module.css"

export default function Cool() {
  return (
    <div className={styles.allinone}>
      <div className={styles.info}>
        <Image
          src={"/vector.png"}
          alt="underline"
          height={12}
          width={246}
          className={styles.underline}
        />
        <h2 className={styles.heading}>All the cool features</h2>
        <p className={styles.paragraph}>
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
        </p>
        <div className={styles.button}>
          <p className={styles.button_text}>View all the features</p>
          <Image
            src={"/arrow.png"}
            alt="arrow"
            height={24}
            width={24}
            className={styles.arrow}
          />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={"/Right.png"}
          height={600}
          width={479}
          alt="group"
          className={styles.group}
        />
      </div>
    </div>
  );
}