import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className ="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hi</div>}></Route>
          <Route path="/login" element={ <LoginComponent/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
