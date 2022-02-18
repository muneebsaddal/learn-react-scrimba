
function Question(props) {

    const answers = []
    for (let i = 0; i < props.incorrect_answers.length; i++) {
        answers[i] = props.incorrect_answers[i]
    }
    answers[answers.length] = props.correct_answer
    
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(answers)

    

    return (
        <div>
            <h1 className="statement">{props.statement}</h1>
            <button className="answers">{answers[0]}</button>
            <button className="answers">{answers[1]}</button>
            { answers[2] && <button className="answers">{answers[2]}</button>}
            { answers[3] && <button className="answers">{answers[3]}</button>}
            <hr/>
        </div>
    )
}

export default Question