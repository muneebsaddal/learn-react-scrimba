import { React, useState } from "react"
import memesData from "../memesData"

function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(memeImage)
        
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input"></input>
                <input type="text" placeholder="Bottom text" className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>get a new meme</button>
            </div>
            <img src={memeImage} className="main-image"></img>
        </main>
    )
}

export default Meme