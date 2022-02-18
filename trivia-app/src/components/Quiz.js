import { nanoid } from "nanoid"

import Question from "./Question"

function Quiz(props) {

    const refreshPage = () => {
        window.location.reload()
    }

    const questionElement = props.questions.results.map(question => (
        <Question 
            key={nanoid()}    
            statement={question.question}
            correct_answer={question.correct_answer}
            incorrect_answers={question.incorrect_answers}            
        />
    ))

    return (
        <main>
            <div className="form">
                {props && questionElement}
            </div>
            <div className="buttons">
            <button className="check-button">Check Answers</button>
            {/* <button onClick={refreshPage} >Play Again</button> */}
            </div>
            
        </main>
    )
}

export default Quiz