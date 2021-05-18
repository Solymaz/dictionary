import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
        <footer className="App-footer">
          <small>
            <a href="https://github.com/Solymaz/dictionary" target="_blank">
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/solmaz-seyedmousavi/"
              target="_blank"
            >
              Solmaz
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
