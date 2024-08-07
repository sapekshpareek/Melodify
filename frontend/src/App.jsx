import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hi</div>}></Route>
          <Route path="/login" element={ <LoginComponent/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
