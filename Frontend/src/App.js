import { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import { useAuth } from "./contexts/authContext";
import { DragProvider } from "./contexts/dragContext";
import Navbar from "./components/NavBar";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <DragProvider>
                  <DashBoard />
                </DragProvider>
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
