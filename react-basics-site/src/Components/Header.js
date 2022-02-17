import reactLogo from "../images/favicon.ico"

function Header(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={reactLogo} className="nav-logo"></img>
            <h3 className="nav-title">React Facts</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider" onClick={props.handleClick}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}

export default Header