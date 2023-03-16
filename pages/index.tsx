import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface BookProps {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
export default function Home() {
  const [book, setBook] = useState<BookProps[]>();
  const getApi = async () => {
    const bestSeller = await axios.get(
      "https://books-api.nomadcoders.workers.dev/lists"
    );
    setBook(bestSeller.data.results);
  };

  useEffect(() => {
    getApi();
  });

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          grid-template-columns: repeat(auto-fill, 200px)          columnGap: "5px",
          rowGap: "5px",
          gridAutoFlow: "row",
        }}
      >
        {book?.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "aliceblue",
              }}
            >
              <span>{item.display_name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
