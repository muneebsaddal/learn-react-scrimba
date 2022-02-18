import React, { useState, useEffect } from "react"

import Quiz from "./components/Quiz";
import Intro from "./components/Intro";

function App() {

	const [startQuiz, setStartQuiz] = useState(false)

	function handleQuizState() {
		setStartQuiz(!startQuiz)
	}

	const [questions, setQuestions] = useState(null)

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5")
			.then(res => res.json())
			.then(data => setQuestions(data))
	}, [])

	return (
		<div>
			{
				startQuiz ?
					(questions && <Quiz questions={questions} setQuestions={setQuestions} />) :
					<Intro handleQuizState={handleQuizState} />
			}
		</div>
	);
}

export default App;
