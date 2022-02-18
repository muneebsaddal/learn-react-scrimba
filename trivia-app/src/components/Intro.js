
function Intro(props) {
    return(
        <div className="intro">
            <h1 className="intro-title">Trivia</h1>
            <p className="intro-description">Trivia is information and data that are considered to be of little value</p>
            <button onClick={props.handleQuizState} className="intro-button">Start Quiz</button>
        </div>
    )
}

export default Intro