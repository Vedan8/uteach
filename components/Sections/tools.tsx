"use client";

import Image from "next/image";
import styles from "@/app/css/tools.module.css";
import Appframe from "@/components/updates/appframe";

export default function Tools() {
  return (
    <div className={styles.tools}>
      <Image
        src={"/right_blob.png"}
        alt="blob"
        height={523}
        width={868}
        className={styles.right_blob}
      />
      <Image
        src={"/left_blob.png"}
        alt="blob"
        height={561}
        width={652}
        className={styles.left_blob}
      />

      <div className={styles.info}>
        
          <h2 className={styles.heading}>All the {" "}
            <span className={styles.headingWrapper}> 
            tools
            <Image
            src={"/vector.png"}
            alt="underline"
            height={10}
            width={121}
            className={styles.underline}
          /></span>{" "}
            that you need</h2>
        

        <p className={styles.paragraph}>
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
      </div>

      <Image
        src={"/desktop.png"}
        alt="desktop"
        height={660}
        width={1120}
        className={styles.desktop}
      />
      <Image
        src={"/Lines.png"}
        alt="lines"
        height={78}
        width={1093}
        className={styles.lines}
      />
      <Appframe />
    </div>
  );
}