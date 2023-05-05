import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import UpdateItem from "./components/UpdateItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddItem/>} />
          <Route path="/edit/:id" element={<UpdateItem/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
