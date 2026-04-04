import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/Contact";
import Capabilities from "./sections/Capabilities";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <Services />
        <Process />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
