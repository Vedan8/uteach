import Image from "next/image";
import styles from "@/app/css/world.module.css"

export default function World() {
  return (
    <div className={styles.world_section}>
      <div className={styles.mobile_top_image}>
        <Image
          src="/top-world.png"
          alt=""
          width={600}
          height={240}
          className={styles.img_top}
          priority
        />
      </div>

      <div className={styles.mobile_bottom_image}>
        <Image
          src="/bottom-world.png"
          alt=""
          width={600}
          height={240}
          className={styles.img_bottom}
        />
      </div>

      <div className={styles.desktop_left_image}>
        <Image
          src="/left-world.png"
          alt=""
          width={467}
          height={636}
          className={styles.img_left}
          priority
        />
      </div>

      <div className={styles.desktop_right_image}>
        <Image
          src="/right-world.png"
          alt=""
          width={470}
          height={598}
          className={styles.img_right}
          priority
        />
      </div>

      <div className={styles.content_wrapper}>
        <h2 className={styles.world_heading}>
          Join a world of learning
        </h2>
        <p className={styles.world_paragraph}>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br className={styles.desktop_break} />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <a href="#" className={styles.signup_button}>
          Sign Up Now
        </a>
      </div>
    </div>
  );
}