import Navbar from "../../components/navbar/Navbar";
import heroImg from "../../assets/illustration1.png";
import Input from "../../components/inputs/Input";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home">
      <Navbar />
      <header className="hero__content">
        <div className="hero__content-text">
          <h1>Explore and Travel</h1>
          <p>Holiday finder</p>
          <hr />
          <Input />
          <button className="button">Explore</button>
        </div>

        <img src={heroImg} alt="HeroImage" className="hero__content-img" />
      </header>
    </section>
  );
};

export default Hero;
