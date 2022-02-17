import React, { useState } from "react"

import Die from "./components/Die";

function App() {

	const [number, setNumber] = useState(6)

	return (
		<main>
			<Die number={number}/>
		</main>
	);
}

export default App;
