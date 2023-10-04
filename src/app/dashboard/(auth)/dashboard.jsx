// "use client";
// import React, { useEffect, useState } from "react";

// const DashboardTesting = () => {
//   const [data, setData] = useState([]);
//   const [err, setErr] = useState(false);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         setErr(true);
//       }

//       const data = await res.json();

//       setData(data);
//       setLoading(false);
//     };
//     getData();
//   }, []);

//   console.log(data);

//   return <div className={styles.container}>Dashboard</div>;
// };

// export default DashboardTesting;
