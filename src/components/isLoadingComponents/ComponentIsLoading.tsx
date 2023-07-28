import { LogoColor } from "../Header";

function ComponentIsLoading() {
  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <h2 style={{ fontSize: 30, cursor: "pointer" }}>Tele</h2>
        <LogoColor style={{ fontSize: 34 }}>Porn</LogoColor>
      </div>
      <img
        style={{ width: 300, height: 600, borderRadius: 30 }}
        src="http://37.1.219.168:4444/uploads/isLoading1.gif"
        alt="loading"
      />
    </div>
  );
}

export default ComponentIsLoading;
