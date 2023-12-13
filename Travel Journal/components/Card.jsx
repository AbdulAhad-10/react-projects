import location from "../assets/location-icon.png"

const Card = (props) => {
  return (
    <section className="card">
            
                <img src={props.img} alt="" className="card--image"/>

                <div className="card--text">

                    <div className="card--text--sm_heading">
                        <img src={location} alt="" />
                        <h6>{props.country}</h6>
                        <a href="#">View on Google Maps</a>
                    </div>

                    <h2 className="card--text--lg_heading">{props.place}</h2>

                    <h4 className="card--text--date">{props.date}</h4>

                    <p className="card--text--description">{props.description}</p>
                </div>
    </section>
  )
}

export default Card