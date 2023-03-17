import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "wheat",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "80px",
            width: "80%",
            backgroundColor: "wheat",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "10px",

              padding: "10px",
              color: "black",
              fontSize: "20px",
            }}
          >
            <Link href={"/"}>Home</Link>
          </div>
          <div
            style={{
              margin: "10px",
              color: "black",
              fontSize: "20px",
              padding: "10px",
            }}
          >
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </>
  );
}
