import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import ImageDiveder from "./components/ImageDiveder";
import Prodctivity from "./components/Prodctivity";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ImageDiveder />
      <Features />
      <Prodctivity />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
