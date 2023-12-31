import { storyData } from "../../constants";
import Story from "../../components/story/Story";
import "./stories.css";

const Stories = () => {
  const stories = storyData.map((item) => (
    <Story
      key={item.title}
      img={item.img}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <section className="stories" id="stories">
      <div className="stories__text">
        <h2>Trending stories</h2>
        <a href="#">View all</a>
      </div>
      <div className="stories__container">{stories}</div>
    </section>
  );
};

export default Stories;
