import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    "red", "green", "blue", "yellow", "purple",
    "orange", "pink", "gray", "cyan", "lime"
  ];

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-10">
        Background Color Changer
      </h1>

      <div className="flex flex-wrap justify-center gap-3 px-4 py-3 bg-white/80 rounded-3xl shadow-xl">
        {colors.map((clr) => (
          <button
            key={clr}
            onClick={() => setColor(clr)}
            className="px-4 py-2 rounded-full text-white font-semibold shadow-md capitalize transition-transform hover:scale-110"
            style={{ backgroundColor: clr }}
          >
            {clr}
          </button>
        ))}
      </div>

      <button
        onClick={() => setColor("black")}
        className="mt-8 bg-gray-800 text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-500 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default App;


