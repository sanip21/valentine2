import { useState } from "react";
//import gif from "./assets/trim.2601C3FE-1570-4473-88C5-17056355D0F3.gif";
import kiss from "./assets/IMG_6492.gif";
import "./App.css";
const phrases = [
  "No",
  "Sachii?",
  "Sachi noo ho?",
  "Pokie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];
const img = [
  <img
    alt="emotional bear"
    src="https://media.tenor.com/qqRoBpnjOrIAAAAi/tkthao219-bubududu.gif"
  />,
];

function App() {
  const [noCount, setnoCount] = useState(0);
  const [yesPressed, setyesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  //const [noPressed, setnoPressed] = useState(0);

  function handNoclick() {
    setnoCount(noCount + 1);
  }
  function getnoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
    return img;
  }
  function noButtonimg() {
    return img;
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img src={kiss} alt="" />
          <div className="text">Yay!!! i love you </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/ZhNxfL0GmoMAAAAi/mocha-bear-hearts.gif"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setyesPressed(true)}
            >
              yes
            </button>
            <button onClick={handNoclick} className="noButton">
              {getnoButtonText()}
            </button>
            <button onClick={handNoclick} className="noButtonimg">
              {noButtonimg()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
