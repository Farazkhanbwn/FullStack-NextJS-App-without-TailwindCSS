import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
// import Button from "src/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt=""
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="E-mail" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="/contact" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
