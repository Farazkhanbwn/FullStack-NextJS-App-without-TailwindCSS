import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="About Page"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum
            ea exercitationem id ad consectetur hic suscipit commodi architecto
            nisi tenetur rem quam nam, temporibus dolorem quit volume.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptatem magnam eum id sapiente cupiditate consequatur rem ducimus
            suscipit eaque iste odit, animi molestiae porro officia deserunt, in
            aliquid minimal.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque,
            tempora modi ipsum ipsa vel. Voluptate ratione neque illo mollitia
            debitis, distinctio, corporis <br />
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
