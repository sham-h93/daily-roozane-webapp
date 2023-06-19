import "./App.css";
import Header from "./components/header/header";
import Note from "./components/note/note";
import Side from "./components/side/side";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Note />
      <Side />
    </div>
  );
}

export default App;
