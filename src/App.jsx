
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Service from './Pages/Service';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
     </Routes>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
