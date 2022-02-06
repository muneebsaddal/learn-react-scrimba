import icon_1 from "../Images/icons/icon-1.png"
import icon_2 from "../Images/icons/icon-2.png"
import icon_3 from "../Images/icons/icon-3.png"
import icon_4 from "../Images/icons/icon-4.png"
import icon_5 from "../Images/icons/icon-5.png"

function Footer() {
    return(
        <div className="footer">
            <img src={icon_1} className="icon"></img>
            <img src={icon_2} className="icon"></img>
            <img src={icon_3} className="icon"></img>
            <img src={icon_4} className="icon"></img>
            <img src={icon_5} className="icon"></img>
        </div>
    )
}

export default Footer