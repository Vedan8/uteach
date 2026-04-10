import Image from "next/image";
import styles from "@/app/css/reach.module.css"

export default function Reach() {
  return (
    <section className={styles.reach}>
      <ul className={styles.row}>
        <li>
          <figure>
            <Image
              src={"/user-countries.png"}
              alt="user countries"
              height={213}
              width={370}
              className={styles.image}
            />
          </figure>
        </li>

        <li>
          <figure>
            <Image
              src={"/values-teachers.png"}
              alt="values teachers"
              height={213}
              width={370}
              className={styles.image}
            />
          </figure>
        </li>

        <li>
          <figure>
            <Image
              src={"/happy-students.png"}
              alt="happy students"
              height={213}
              width={370}
              className={styles.image}
            />
          </figure>
        </li>
      </ul>
    </section>
  );
}