import illustration from "../../assets/illustration3.png";
import "./cta.css";

const Cta = () => {
  return (
    <section className="cta__container" id="about">
      <img src={illustration} alt="" className="cta__container-img" />
      <div className="cta__container-text">
        <h2>A new way to explore the world </h2>
        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <button className="button">Learn more</button>
      </div>
    </section>
  );
};

export default Cta;
