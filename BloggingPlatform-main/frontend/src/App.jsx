import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import ViewPost from "./Pages/ViewPost";

function App() {
  return (
    <Router>
      <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">Blogging Platform</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
