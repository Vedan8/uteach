import Image from "next/image";
import styles from "@/app/css/reach.module.css"

export default function Reach() {
  return (
    <section className={styles.reach}>
      <div className={styles.row}>
        <Image
          src={"/user-countries.png"}
          alt="user_c"
          height={213}
          width={370}
          className={styles.image}
        />
        <Image
          src={"/values-teachers.png"}
          alt="user_c"
          height={213}
          width={370}
          className={styles.image}
        />
        <Image
          src={"/happy-students.png"}
          alt="user_c"
          height={213}
          width={370}
          className={styles.image}
        />
      </div>
    </section>
  );
}