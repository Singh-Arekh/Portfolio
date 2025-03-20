import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      {/* <Experience/> */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
