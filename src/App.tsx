// STYLES
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import tsLogo from "/ts.svg";
import "./App.css";
// COMPONENTS
import { Filters } from "./components/Filters/Filters";
import { List } from "./components/List/List";
// CONTEXT
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <h2>Kernel Full Stack Developer Code Challenge</h2>
        </header>

        <main>
          <Filters />
          <List />
        </main>

        <footer>
          <p>
            Technical Test created by{" "}
            <a href="https://tonii.dev" target="_blank">
              Antonio Delgado
            </a>
          </p>
          <span>Vite + React + TypeScript</span>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img src={tsLogo} className="logo typescript" alt="TS logo" />
            </a>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
