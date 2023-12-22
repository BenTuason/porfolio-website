import Home from "./pages/Home";
import './index.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Life from "./pages/Life";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Life" element={<Life />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
