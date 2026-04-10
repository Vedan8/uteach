"use client";

import Image from "next/image";
import styles from "@/app/css/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top_layout}>
          
          <div className={styles.logo_wrapper}>
            <Image
              src="/footlogo.png"
              alt="uteach logo"
              width={173}
              height={40}
              className={styles.logo_img}
            />
          </div>

          <nav className={styles.links_grid}>
            <section>
              <h4 className={styles.column_heading}>Product</h4>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Pricing</a></li>
                <li><a href="#" className={styles.link_item}>Overview</a></li>
                <li><a href="#" className={styles.link_item}>Browse</a></li>
                <li><a href="#" className={styles.link_item}>Accessibility</a></li>
              </ul>
            </section>

            <section>
              <h4 className={styles.column_heading}>Solutions</h4>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Brainstorming</a></li>
                <li><a href="#" className={styles.link_item}>Ideation</a></li>
                <li><a href="#" className={styles.link_item}>Wireframing</a></li>
                <li><a href="#" className={styles.link_item}>Research</a></li>
              </ul>
            </section>

            <section>
              <h4 className={styles.column_heading}>Resources</h4>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Help Center</a></li>
                <li><a href="#" className={styles.link_item}>Blog</a></li>
                <li><a href="#" className={styles.link_item}>Tutorials</a></li>
                <li><a href="#" className={styles.link_item}>FAQs</a></li>
              </ul>
            </section>

            <section>
              <h4 className={styles.column_heading}>Support</h4>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Contact Us</a></li>
                <li><a href="#" className={styles.link_item}>Developers</a></li>
                <li><a href="#" className={styles.link_item}>Documentation</a></li>
                <li><a href="#" className={styles.link_item}>Integrations</a></li>
              </ul>
            </section>

            <section>
              <h4 className={styles.column_heading}>Company</h4>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>About</a></li>
                <li><a href="#" className={styles.link_item}>Press</a></li>
                <li><a href="#" className={styles.link_item}>Events</a></li>
                <li>
                  <a href="#" className={styles.link_item}>
                    Request Demo
                    <Image src="/arrow-right.png" alt="" width={16} height={16} />
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
      </div>

      <div className={styles.divider_container}>
        <hr className={styles.divider} />
      </div>

      <div className={styles.footer_bottom}>
        <p>uteach @ 2023. All rights reserved.</p>

        <nav className={styles.footer_links}>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <a href="#">
            <Image src="/globe.png" alt="" width={18} height={18} className={styles.icon} /> 
            EN
          </a>
          <a href="#">
            <Image src="/euro.png" alt="" width={18} height={18} className={styles.icon} /> 
            EUR
          </a>
          <a href="#">
            <Image src="/person.png" alt="" width={18} height={18} className={styles.icon} />
          </a>
        </nav>
      </div>
    </footer>
  );
}