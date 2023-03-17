import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UrlProps {
  name: string;
  url: string;
}
interface BookProps {
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  buy_links: UrlProps[];
  rank: number;
  contributor: string;
  link: string;
}
export default function BookDetail() {
  const router = useRouter();
  const [book, setBook] = useState<BookProps[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const { results } = await (
      await fetch(
        `https://books-api.nomadcoders.workers.dev/list?name=${router.query.id}`
      )
    ).json();
    setBook(results.books);
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        <div className="wraper">
          {isLoading ? (
            <h1>loading ..</h1>
          ) : (
            !!book && (
              <div className="container">
                <span className="title"> {router.query.id}</span>
                <div className="bookContainer">
                  {book?.map((item, idx) => {
                    console.log(item);
                    return (
                      <div key={idx} className="book">
                        <Image
                          src={item.book_image}
                          alt="book"
                          width={200}
                          height={300}
                        ></Image>
                        <span>rank : {item.rank}</span>
                        <span>contributor : {item.contributor}</span>
                        <a href={`${item.buy_links[0].url}`} className="btn">
                          Buy Now
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          background-color: wheat;
          flex-direction: column;
          align-items: center;
        }
        .wraper {
          width: 100%;
          height: 100%;
          display: flex;

          gridrow: auto;
          flex-wrap: wrap;
          cursor: pointer;
        }
        .title {
          font-size: 40px;
          color: black;
        }

        .bookContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .book {
          width: 23svw;
          height: 53vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
        }
        .btn {
          padding: 10px;
          border: 1px solid blue;
          background-color: white;
          color: black;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
