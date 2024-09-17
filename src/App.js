
import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
//  import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

import Skills from './components/skills/Skills';
//import Pricing from './components/pricing/Pricing';
//import Testinomials from './components/testimonials/Testimonials';
// import Blog from './components/blog/Blog';
import Contact from "./components/contact/Contact";
import { Toggle } from "./components/toggle/Toggle";
import useLocalStorage from "use-local-storage";

function App() {
  const preferrence = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isLight, setIsLight] = useLocalStorage("isLight", preferrence);

  const handleChange = () => {
    setIsLight(!isLight);
  };
  

  return (
    <div className='App' data-theme={isLight ? "dark" : "light"}>
      <Toggle isChecked={isLight} handleChange={handleChange} />
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        {/* <Services/> */}
        <Portfolio/>
        <Skills/>
        {/* <Pricing/> */}
        {/* <Testinomials/> */}
        {/* <Blog/> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
