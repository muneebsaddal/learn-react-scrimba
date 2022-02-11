import earthLogo from "../images/earth-logo.png"

function Header() {
    return (
        <div className="header">
            <img src={earthLogo} className="header-logo"></img>
            <h1 className="header-title">my travel journal</h1>
        </div>
        
    )
}

export default Header