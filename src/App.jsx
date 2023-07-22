import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JyoTube from "./pages/JyoTube";
import Jyogram from "./pages/Jyogram";
import Jyocart from "./pages/Jyocart";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Beau from "./pages/Beau";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jyotube" element={<JyoTube />} />
          <Route path="/jyocart" element={<Jyocart />} />
          <Route path="/jyogram" element={<Jyogram />} />
          <Route path="/beau" element={<Beau />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
