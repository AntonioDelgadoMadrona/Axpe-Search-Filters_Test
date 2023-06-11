// STYLES
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Kernel Full Stack Developer Code Challenge</h2>
      </header>

      <main>
        <h3>Filters</h3>
        <h3>List</h3>
      </main>

      <footer>
        <p>
          Technical Test created by{" "}
          <a href="https://tonii.dev" target="_blank">
            Antonio Delgado
          </a>
        </p>
        <span>With</span>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
