import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/userform";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <a href="/">Fill User Form</a>
          </li>
          <li>
            <a href="/dashboard">Show Dashboard</a>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
