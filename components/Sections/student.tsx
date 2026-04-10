import Image from "next/image";
import styles from "@/app/css/student.module.css"

export default function Student() {
  return (
    <section className={styles.student}>
      <figure className={styles.student_images}>
        <Image src={"/col1.png"} alt="stu" height={546} width={172} className={styles.col1}/>
        <Image src={"/col2.png"} alt="stu" height={651} width={128} className={styles.col2}/>
        <Image src={"/col3.png"} alt="stu" height={567} width={128} className={styles.col3}/>
        <Image src={"/col4.png"} alt="stu" height={436} width={160} className={styles.col4}/>
      </figure>

      <div className={styles.info}>
        <article className={styles.data}>
          <h2 className={styles.heading}>
            Meet internatio
            <span className={styles.headingWrapper}>
              na
              <Image
                src={"/aeroplane.png"}
                alt="aero"
                height={64}
                width={64}
                className={styles.aeroplane}
              />
            </span>
            l students & teachers
          </h2>

          <p className={styles.paragraph}>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
            risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
            faucibus aenean lorem faucibus integer.
          </p>

          <a href="#" className={styles.button}>
            <p className={styles.button_text}>
              Explore teachers and students
            </p>
            <Image src={"/arrow.png"} alt="arrow" height={24} width={24} className={styles.arrow}/>
          </a>
        </article>
      </div>
    </section>
  );
}