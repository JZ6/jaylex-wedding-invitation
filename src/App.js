import logo from "./logo.svg";
import "./App.css";
import {getGuestData, getWelcomeMessage } from "./guests";

function App() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const guestParam = params.get("guest");
  const guestData = getGuestData(guestParam);

  const welcomeMessage = getWelcomeMessage(guestData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{welcomeMessage}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
