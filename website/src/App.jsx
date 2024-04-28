import { useState } from "react";
import { LINKS } from "./data.js";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function onSelect() {
    console.log("Hi");
  }

  return (
    <>
      <Header />
      <div className="card space-x-2 mt-20">
        <Button
          title={LINKS[0].title}
          link={LINKS[0].link}
          onSelect={onSelect}
        />
        <Button
          title={LINKS[1].title}
          link={LINKS[1].link}
          onSelect={onSelect}
        />
      </div>
    </>
  );
}

export default App;
