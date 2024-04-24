import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigator from "./components/Navigator";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navigator />
      <Hero />
      <Shorten />
      <Stats />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
