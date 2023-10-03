import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 Lamamia. All rights reserved.</div>
      <div className={styles.socialIcon}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Next Site Facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Next Site Insta"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Next Site Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Next Site Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
