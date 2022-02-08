import group77 from "../images/group-77.png"

function Hero() {
    return (
        <div>
            <section className="hero">
                <img className="hero-photo" src={group77}></img>
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    )
}

export default Hero