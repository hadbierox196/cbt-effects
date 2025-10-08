import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>🚀 React + Vercel Demo</h1>
      <p>This is a simple React app deployed for free on Vercel.</p>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <footer>Created with ❤️ using React + Vercel</footer>
    </div>
  );
}

export default App;
