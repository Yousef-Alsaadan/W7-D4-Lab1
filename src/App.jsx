import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div className="">
        <div className="p-4">
          <button
            className="bg-primary p-2 rounded-md text-primary-content"
            onClick={toggleTheme}
          >
            change mode
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>Set your numbers</h1>
          <div className="flex gap-4">
            <p>First Number</p>
            <p>Second Number</p>
          </div>
          <div className="flex gap-12">
            <div className="flex gap-4 items-center">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setNum1((count) => count + 1)}
              >
                +
              </button>
              <p>{num1}</p>
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setNum1((count) => count - 1)}
              >
                -
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setNum2((count) => count + 1)}
              >
                +
              </button>
              <p>{num2}</p>
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setNum2((count) => count - 1)}
              >
                -
              </button>
            </div>
          </div>

          <br />
          <br />

          <h1>Do some math</h1>
          <div className="flex gap-4">
            <div className="">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setRes(() => num1 + num2)}
              >
                +
              </button>
            </div>
            <div className="">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setRes(() => num1 - num2)}
              >
                -
              </button>
            </div>
            <div className="">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setRes(() => num1 * num2)}
              >
                x
              </button>
            </div>
            <div className="">
              <button
                className="bg-primary p-2 rounded-md text-primary-content"
                onClick={() => setRes(() => num1 / num2)}
              >
                %
              </button>
            </div>
          </div>

          <br />
          <br />

          <h1>Resulte</h1>
          <p>{res}</p>
        </div>
      </div>
    </>
  );
}

export default App;
