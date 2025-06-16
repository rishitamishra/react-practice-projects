import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Counter App</h1>
      <div className="text-6xl font-semibold mb-6">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increase
        </button>
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

