import trollFace from "../images/troll-face.png"

function Header() {
    return(
        <div className="header">
            <img src={trollFace} className="header-logo"></img>
            <h1 className="header-title">Meme Generator</h1>
            <h3 className="header-detail">React Course - Project 5</h3>
        </div>
    )
}

export default Header