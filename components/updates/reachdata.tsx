import styles from "@/app/css/reachdata.module.css"
import Image from "next/image";
const Reachdata=()=>{
    return(
        <ul className={styles.row}>
            <li className={styles.item}>
                <Image 
                    src={"/heart.png"}
                    alt="heart"
                    height={64}
                    width={64}
                    className={styles.image}
                />
                <h2 className={styles.title}>195</h2>
                <p className={styles.paragraph}>user countries</p>
            </li>
            <li className={styles.item}>
                <Image 
                    src={"/diamond.png"}
                    alt="diamond"
                    height={64}
                    width={64}
                    className={styles.image}
                />
                <h2 className={styles.title}>1M</h2>
                <p className={styles.paragraph}>valued teachers</p>
            </li>
            <li className={styles.item}>
                <Image 
                    src={"/school.png"}
                    alt="school"
                    height={64}
                    width={64}
                    className={styles.image}
                />
                <h2 className={styles.title}>17M</h2>
                <p className={styles.paragraph}>happy students</p>
            </li>
        </ul>
    )
}
export default Reachdata;