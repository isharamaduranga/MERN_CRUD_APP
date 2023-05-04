import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <NavBar/>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={}/>
          <Route path="/edit/:id" element={}/>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
