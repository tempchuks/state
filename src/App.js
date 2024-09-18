import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(0);
  function handleNextEvent() {
    if (step >= messages.length - 1) return;
    setStep(step + 1);
  }
  function handleprevEvent() {
    if (step <= 0) return;
    setStep(step - 1);
  }
  return (
    <>
      <button className="close"></button>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 0 ? "active" : ""}>1</div>
          <div className={step >= 1 ? "active" : ""}>2</div>
          <div className={step >= 2 ? "active" : ""}>3</div>
        </div>
        <p className="message"> {messages[step]}</p>
        <div className="buttons">
          <button
            onClick={handleprevEvent}
            style={{ backgroundColor: "yellowgreen" }}
          >
            Previous
          </button>
          <button
            onClick={handleNextEvent}
            style={{ backgroundColor: "yellowgreen" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
