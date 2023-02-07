import "./App.css";
import Navbar from "./components/Navber/Navbar";
import Home from "./components/containers/Home/Home";
import About from "./components/containers/About/About";
import Skills from "./components/containers/Skills/Skills";
import Portfolio from "./components/containers/Portfolio/Portfolio";
import Contact from "./components/containers/Contact/Contact";
import Footer from "./components/containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
