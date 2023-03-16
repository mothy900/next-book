export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "80px",
          width: "100%",
          backgroundColor: "wheat",
          alignItems: "center",
        }}
      >
        <div
          style={{ margin: "10px", backgroundColor: "white", padding: "10px" }}
        >
          Home
        </div>
        <div
          style={{ margin: "10px", backgroundColor: "white", padding: "10px" }}
        >
          About
        </div>
      </div>
    </>
  );
}
