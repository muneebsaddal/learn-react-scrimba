import locationLogo from "../images/map.png"

function Card(props) {
    return(
        <div className="card">
            <div>
                <img src={props.imageUrl} className="card-image"></img>
            </div>
            <div className="card-content">
                <div className="card-location-details">
                    <img src={locationLogo} className="location-logo"></img>
                    <p className="card-location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card-mapLink">View on Google Maps</a>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-date">{props.startDate}  -  {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card