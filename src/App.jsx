import "./App.css";
import Header from "./components/header/header";
import Notes from "./components/notes/notes";
import Side from "./components/side/side";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Side />
      <Notes />
    </div>
  );
}

export default App;
