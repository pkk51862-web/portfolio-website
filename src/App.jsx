import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return (
    <Router>
      {/* 
        The Routes component looks at the current URL and 
        renders the matching component below.
      */}
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<Home />} />
        
        {/* 
          Dynamic route for project details. 
          The ":id" part becomes the variable used in Project.jsx 
          (e.g., /project/jewelry or /project/game-ecom)
        */}
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}