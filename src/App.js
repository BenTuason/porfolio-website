import Home from "./pages/Home";
import './index.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Life from "./pages/Life";
import {AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Life" element={<Life />}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
