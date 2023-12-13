import globe from "../assets/globe-icon.png"

const Header = () => {
  return (
    <nav className="nav">
        <img src={globe} alt="LocationIcon" />
        <h4>my travel journal.</h4>
    </nav>
  )
}

export default Header