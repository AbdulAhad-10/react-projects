import logo from "../assets/PS_logo.png";

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt={"PhotoShop Logo"} />
        <h3>Photoshop</h3>
    </div>
  )
}

export default Header