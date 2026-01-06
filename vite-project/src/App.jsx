import { Routes, Route } from "react-router-dom";

import Dock from "./Dock";
import Home from "./Home";
import Works from "./Works";
import Resume from "./Resume";
import ProfileCard from "./ProfileCard";
import Skills from "./skills";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300">
      
      <Dock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

    </div>
  );
}

export default App;
