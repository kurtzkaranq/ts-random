import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App(): React.ReactElement | null {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Add%20User" element={<AddUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
