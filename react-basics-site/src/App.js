import React, {useState} from "react"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"

function App() {

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prevState => !prevState)
    }

    return (
        <div className="container">
            <Header darkMode={darkMode} handleClick={toggleDarkMode}/>
            <MainContent darkMode={darkMode} handleClick={toggleDarkMode}/>
            <Footer darkMode={darkMode} handleClick={toggleDarkMode}/>
        </div>
    )
}

export default App;