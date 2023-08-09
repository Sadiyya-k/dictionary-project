import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Welcome" />
        </main>
        <footer className="App-footer">
          Coded by Sadiyya Khan, open-sourced on{" "}
          <a href="https://github.com/Sadiyya-k/dictionary-project.git">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
