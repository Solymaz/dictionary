import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Not knowing is not bad, but not asking IS Bad!
        </header>
        <Dictionary />
        <footer className="fixed-bottom text-center">
          <small>
            <a
              href="https://github.com/Solymaz/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/solmaz-seyedmousavi/"
              target="_blank"
              rel="noreferrer"
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
