import "./story.css";

const Story = (props) => {
  return (
    <div className="storyCard">
      <img src={props.img} alt="img" className="storyCard__img" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a href="#">Read More</a>
    </div>
  );
};

export default Story;
