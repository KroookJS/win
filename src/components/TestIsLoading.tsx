import { IndexBlock } from "./Categories/TopVideosItem";
import { LogoColor } from "./Header";

function TestIsLoading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <img
        style={{
          width: 116,
          height: 86,
          borderRadius: 20,
          objectFit: "cover",
        }}
        src="http://mob.porno365.bond/uploads/gifs/5/5/5522/1.gif"
        alt="loading"
      />
      <h2 style={{ fontSize: 20, cursor: "pointer" }}>Tele</h2>
      <LogoColor style={{ fontSize: 24 }}>Porn</LogoColor>
      <IndexBlock>&</IndexBlock>
    </div>
  );
}

export default TestIsLoading;
