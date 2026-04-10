import Image from "next/image";
import styles from "@/app/css/allinone.module.css"

export default function AllInOneSection() {
  return (
    <div className={styles.allinone}>
      <Image
        src={"/blob.png"}
        alt="blob"
        height={448}
        width={506}
        className={styles.blob}
      />
      <div className={styles.info}>
        <Image
          src={"/vector.png"}
          alt="underline"
          height={12}
          width={246}
          className={styles.underline}
        />
        <h2 className={styles.heading}>An all-in-one app that makes it easier</h2>
        <p className={styles.paragraph}>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        <div className={styles.list}>
          <span className={styles.items}>
            <Image
              src={"/check.png"}
              alt="check"
              height={24}
              width={24}
              className={styles.check}
            />
            <p className={styles.list_text}>Est et in pharetra magna adipiscing ornare aliquam.</p>
          </span>
          <span className={styles.items}>
            <Image
              src={"/check.png"}
              alt="check"
              height={24}
              width={24}
              className={styles.check}
            />
            <p className={styles.list_text}>Tellus arcu sed consequat ac velit ut eu blandit.</p>
          </span>
          <span className={styles.items}>
            <Image
              src={"/check.png"}
              alt="check"
              height={24}
              width={24}
              className={styles.check}
            />
            <p className={styles.list_text}>Ullamcorper ornare in et egestas dolor orci.</p>
          </span>
        </div>
        <div className={styles.button}>
          <p className={styles.button_text}>Find more about the app</p>
          <Image
            src={"/arrow.png"}
            alt="arrow"
            height={24}
            width={24}
            className={styles.arrow}
          />
        </div>
      </div>
      <Image
        src={"/group.png"}
        height={546}
        width={656}
        alt="group"
        className={styles.group}
      />
      <Image
        src={"/mob-group.png"}
        height={472}
        width={361}
        alt="group"
        className={styles.mob_group}
      />
    </div>
  );
}