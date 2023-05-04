import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <NavBar/>
          <Route path="/" element={}/>
          <Route path="/add" element={}/>
          <Route path="/edit/:id" element={}/>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
