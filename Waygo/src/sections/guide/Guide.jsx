import "./guide.css";
import illustration from "../../assets/illustration2.png";

const Guide = () => {
  return (
    <section className="guide">
      <div className="guide__text">
        <h2>Guides by Thousand Sunny</h2>
        <p>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <button className="button">Download</button>
      </div>

      <img src={illustration} alt="Image" className="guide__img" />
    </section>
  );
};

export default Guide;
