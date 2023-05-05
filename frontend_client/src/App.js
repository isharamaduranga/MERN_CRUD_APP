import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddItem/>} />
          <Route path="/edit/:id" />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
