import emailLogo from "../Images/icons/email-1.png"

function Main() {
    return(
        <div className="content">
            <div className="info">
                <h1 className="name">Laura Smith</h1>
                <h3 className="title">Web Developer</h3>
                <p className="site">laurasmith.website</p>
            </div>
            <a className="email">
                <img src={emailLogo} className="email-logo"></img><p className="email-p">Email</p>
            </a>
            <div className="about">
                <h2 className="about-title">About</h2>
                <h3 className="about-para">I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                     I try to keep up with security and best practices, and am always looking for new things to learn.</h3>
                <h2 className="about-title">Interest</h2>
                <h3 className="about-para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h3>
            </div>
        </div>
    )
}

export default Main