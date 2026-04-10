"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/app/css/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <div className={styles.imglogo}><Image src="/logo.png" width={22} height={21} alt="Logo" className={styles.logo_img} /></div>
            <span className={styles.logo_text}>teach</span>
          </Link>

          <div className={styles.menu}>
            <Link href="" className={styles.menu_item}><span className={styles.menu_text}>Products</span></Link>
            <Link href="" className={styles.menu_item}><span className={styles.menu_text}>Solutions</span></Link>
            <Link href="" className={styles.menu_item}><span className={styles.menu_text}>Pricing</span></Link>
              <button className={styles.dropdown}>
                Resources
                <Image src="/drop.png" width={22} height={21} alt="Dropdown" className={styles.drop_image}/>
              </button>
          </div>
      </div>
      <div className={styles.right}>
            <div className={styles.login}><Link href="" className="login">Log In</Link></div>
            <div className={styles.signup}><Link href="" className={styles.signup_text}>Sign Up Now</Link></div>
      </div>
      <div className={styles.hamburger}>      
      <Image
        src={"/hamburger.png"}
        height={24}
        width={24}
        alt="hamburger"
      />
      </div>
    </nav>
  );
};

export default Navbar;