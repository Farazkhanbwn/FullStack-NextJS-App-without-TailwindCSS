"use client";
import React from "react";

const DashboardTesting = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
};

export default DashboardTesting;
