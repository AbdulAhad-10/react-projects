import Destination from "../../components/destination/Destination";
import { destinationsData } from "../../constants";
import "./destinations.css";

const Destinations = () => {
  const destination = destinationsData.map((item) => (
    <Destination
      key={item.location}
      location={item.location}
      country={item.country}
      img={item.img}
    />
  ));
  return (
    <section className="destinations" id="destinations">
      <div className="destinations__text">
        <h2>Featured destinations</h2>
        <a href="#">View All</a>
      </div>

      <div className="destinations__container">{destination}</div>
    </section>
  );
};

export default Destinations;
