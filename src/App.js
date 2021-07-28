import Intro from "./components/Intro";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100%",
      }}
    >
      <Intro />
    </div>
  );
}

export default App;
