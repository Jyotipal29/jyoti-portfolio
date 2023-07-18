import About from "../component/About";
import Contact from "../component/Contact";
import Main from "../component/Main";
import Projects from "../component/Projects";
import Skills from "../component/Skills";
const Home = () => {
  return (
    <div className="  ">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
