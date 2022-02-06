import profilePicture from "../Images/profile-picture.png"

function Header() {
    return(
        <div className="header">
            <img src={profilePicture} className="picture"></img>
        </div>
        
    )
}

export default Header