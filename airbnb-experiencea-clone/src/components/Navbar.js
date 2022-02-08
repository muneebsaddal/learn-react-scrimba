import airbnbLogo from "../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav-logo"></img>
        </nav>
    )
}

export default Navbar