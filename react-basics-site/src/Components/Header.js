import reactLogo from "../images/favicon.ico"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo"></img>
                <h3 className="nav-title">React</h3> 
                <h4> React Course Project - I</h4>
            </nav>
        </header>
    )
}

export default Header