import "./App.css";
import { getGuestData, getWelcomeMessage } from "./guests";

function App() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const guestParam = params.get("guest");
  const guestData = getGuestData(guestParam);

  const welcomeMessage = getWelcomeMessage(guestData);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Welcome-div">
        <p>{welcomeMessage}</p>
      </div>
      <div className="RSVP-div">
        <p>Are you coming to our wedding?</p>
        <div className="Button-container">
          <button className="Button Btn-yes">Yes</button>
          <button className="Button Btn-no">No</button>
        </div>
      </div>
    </div>
  );
}

export default App;
