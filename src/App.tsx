import { useState } from "react";
import "./App.css";

function App() {
  const [stringToShow, setStringToShow] = useState("");

  function extractBiggestNonRepeatStrings(str: string) {
    const nonRepeatStrings: string[] = [];
    let currentNonRepeatString = "";
    let biggestNonRepeatString = "";

    for (let i = 0; i < str.length; i++) {
      const currentChar = str?.[i];

      if (!currentNonRepeatString?.includes(currentChar)) {
        currentNonRepeatString += currentChar;
      } else {
        nonRepeatStrings.push(currentNonRepeatString);
        currentNonRepeatString = currentChar;
      }

      if (currentNonRepeatString?.length > biggestNonRepeatString?.length) {
        biggestNonRepeatString = currentNonRepeatString;
      }
    }
    nonRepeatStrings.push(currentNonRepeatString);

    return biggestNonRepeatString;
  }

  function handleSubmit() {
    const inputValue = (document.getElementById("testInput") as HTMLInputElement)?.value;
    const biggestNonRepeatString = extractBiggestNonRepeatStrings(inputValue);
    setStringToShow(biggestNonRepeatString);
  }

  return (
    <div className="testContainer">
      <h1>Type any text and click the button to extract the longest sequence without repeating characters</h1>
      <div className="card">
        <input type="text" id="testInput" />
        <button onClick={() => handleSubmit()}>Extract</button>
        <h1>Result: {stringToShow}</h1>
      </div>
    </div>
  );
}

export default App;
