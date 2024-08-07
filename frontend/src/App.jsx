import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/hi" element={<div>hi</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
