import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPage = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            recusandae quisquam labore deserunt sequi amet fugit, reprehenderit
            blanditiis, alias tempore eveniet illum suscipit nesciunt eaque
            natus ullam deleniti et similique!
          </p>

          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={40}
              height={40}
              alt=""
              className={styles.userImage}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt=""
            className={styles.bigImage}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          maiores aliquam explicabo ad, animi esse tempore autem consectetur
          odit facere. Rerum temporibus earum placeat ipsum a at suscipit
          voluptate perferendis! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Porro possimus corporis excepturi asperiores fuga
          nam dolores pariatur quis, earum vitae voluptate! Libero provident
          aperiam voluptatum ipsa inventore doloribus magni quam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          suscipit sint sequi vitae illo. Sequi, magni. Magnam eius omnis facere
          sed dignissimos nihil ea voluptatibus ipsam deserunt, vel magni.
          Consequuntur!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          obcaecati saepe id, natus veniam eum ducimus blanditiis pariatur harum
          accusantium non fugit quas, asperiores assumenda quidem, suscipit ea
          rerum et. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptates possimus doloribus laboriosam excepturi animi provident
          magnam cumque modi id cupiditate quidem rem, quasi perferendis
          corporis ratione itaque exercitationem consequuntur nihil?
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
