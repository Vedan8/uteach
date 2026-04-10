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

          <div className={styles.links_grid}>
            <div>
              <p className={styles.column_heading}>Product</p>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Pricing</a></li>
                <li><a href="#" className={styles.link_item}>Overview</a></li>
                <li><a href="#" className={styles.link_item}>Browse</a></li>
                <li>
                  <a href="#" className={styles.link_item}>
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className={styles.column_heading}>Solutions</p>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Brainstorming</a></li>
                <li><a href="#" className={styles.link_item}>Ideation</a></li>
                <li><a href="#" className={styles.link_item}>Wireframing</a></li>
                <li><a href="#" className={styles.link_item}>Research</a></li>
              </ul>
            </div>

            <div>
              <p className={styles.column_heading}>Resources</p>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Help Center</a></li>
                <li><a href="#" className={styles.link_item}>Blog</a></li>
                <li><a href="#" className={styles.link_item}>Tutorials</a></li>
                <li><a href="#" className={styles.link_item}>FAQs</a></li>
              </ul>
            </div>

            <div>
              <p className={styles.column_heading}>Support</p>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>Contact Us</a></li>
                <li><a href="#" className={styles.link_item}>Developers</a></li>
                <li><a href="#" className={styles.link_item}>Documentation</a></li>
                <li><a href="#" className={styles.link_item}>Integrations</a></li>
              </ul>
            </div>

            <div>
              <p className={styles.column_heading}>Company</p>
              <ul className={styles.link_list}>
                <li><a href="#" className={styles.link_item}>About</a></li>
                <li><a href="#" className={styles.link_item}>Press</a></li>
                <li><a href="#" className={styles.link_item}>Events</a></li>
                <li>
                  <a href="#" className={styles.link_item}>
                    Request Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider_container}>
        <hr className={styles.divider} />
      </div>

      <div className={styles.bottom_bar}>
        <p>uteach @ 2023. All rights reserved.</p>

        <div className={styles.bottom_right}>
          <div className={styles.legal_links}>
            <a href="#" className={styles.legal_link}>Terms</a>
            <a href="#" className={styles.legal_link}>Privacy</a>
            <a href="#" className={styles.legal_link}>Contact</a>
          </div>

          <div className={styles.actions}>
            <button className={styles.action_btn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}