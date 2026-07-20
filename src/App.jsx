import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-amber-200 text-3xl font-bold underline flex justify-center items-center h-screen">
        Welcome to Vite + React+ Tailwind CSS
      </h1>
    </>
  );
}

export default App;
