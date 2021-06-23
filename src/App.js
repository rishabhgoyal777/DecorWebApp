import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/screens/Home";
import Collections from "./components/screens/Collections";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import Footer from "./components/Footer";
import Navtest from "./components/Navtest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navtest />
        {/* <Navbar /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
