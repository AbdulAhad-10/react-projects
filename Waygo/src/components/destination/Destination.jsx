import './destination.css'

const Destination = (props) => {
  return (
    <div className="destination__card">
      <img src={props.img} alt="img" className="destination__card-img" />

      <div className="destination__card-text">
        <h4>{props.location}</h4>
        <h6>{props.country}</h6>
      </div>
    </div>
  )
}

export default Destination