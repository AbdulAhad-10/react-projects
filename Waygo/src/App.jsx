import Hero from "./sections/hero/Hero";
import Cta from "./sections/Cta/Cta";
import Destinations from "./sections/destinations/Destinations";
import Guide from "./sections/guide/Guide";
import Stories from "./sections/stories/Stories";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <Cta />
      <Destinations />
      <Guide />
      <Stories />
      <Footer />
    </div>
  );
};

export default App;
