import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log("params is : " + params.category);
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consectetur necessitatibus voluptates alias illum perferendis, quo
            voluptas corporis sequi voluptatibus, ipsa totam minima quasi
            facilis quos doloremque autem sapiente inventore.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/1006087/pexels-photo-1006087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="Category Image"
            className={styles.img}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Beautiful Place</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            tempora ab necessitatibus ipsum ducimus tempore deserunt vitae
            debitis nostrum adipisci voluptate, ratione architecto beatae itaque
            sit nobis quaerat, distinctio libero.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13788613/pexels-photo-13788613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="Category Image"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
