import styles from "@/app/css/appframe.module.css"
import Image from "next/image"
const Appframe=()=>{
    let apps=["app1.png","app2.png","app3.png","app4.png","app5.png","app6.png","app7.png","app8.png","app9.png"]
    return (
        <div className={styles.appframe}>
            {apps.map((app)=>{
                return <Image 
                            src={app}
                            alt="app"
                            height={64}
                            width={64}
                            className={styles.app}
                        />
            })}
        </div>
    )
}
export default Appframe;