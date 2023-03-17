import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
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
      <div className="container">
        <div className="bookWrap">
          {book?.map((item, idx) => {
            return (
              <div
                key={idx}
                className={"book"}
                onClick={() =>
                  router.push({
                    pathname: `/list/${item.list_name}`,
                    query: { id: item.list_name },
                  })
                }
              >
                <span>{item.list_name} ▻</span>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          background-color: wheat;
        }
        .bookWrap {
          width: 80%;
          height: 100%;
          display: flex;

          gridrow: auto;
          flex-wrap: wrap;
          cursor: pointer;
        }
        .book {
          background-color: gray;
          padding: 15px;
          margin: 10px;
          border-radius: 10px;
          boxshadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .book:hover {
          transform: scale(0.95) translateY(5px);
        }
      `}</style>
    </>
  );
}
