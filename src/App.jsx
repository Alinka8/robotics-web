import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const programRef = useRef(null);
  const signupRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <NavBar
        home={homeRef}
        program={programRef}
        signup={signupRef}
        contact={contactRef}
      />
      <div ref={homeRef}>
        <Home program={signupRef} />
      </div>
      <div ref={programRef}>
        <About subTitle="Our program" title="What we offer" />
      </div>
      <div ref={signupRef}>
        <SignUp />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
