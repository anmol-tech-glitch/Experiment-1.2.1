import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const remaining = maxLength - text.length;

  return (
    <div className="container">
      <h2>Live Character Counter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="Type something..."
      />

      <p className={remaining <= 10 ? "warning" : ""}>
        {remaining} characters remaining
      </p>
    </div>
  );
}

export default App;