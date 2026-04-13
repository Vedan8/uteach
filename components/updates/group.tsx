import styles from "@/app/css/group.module.css"
import groupData from "@/app/data/groupData"
import Image from "next/image"

const Group=()=>{
    return (
        <div className={styles.group}>
            <div className={styles.row}>
                {groupData.map((data)=>{
                    return (
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{data.title}</h3>
                                <p className={styles.paragraph}>{data.para}</p>
                            </div>
                            <button className={styles.button}>
                                Take Lesson
                            </button>
                            <div className={styles[data.type]}>
                                {data.type}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Image 
                src={"/group.png"}
                alt="group"
                height={391}
                width={600}
                className={styles.image}
            />
        </div>
    )
}
export default Group;