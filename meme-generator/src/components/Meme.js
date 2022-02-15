import { React, useState } from "react"
import memesData from "../memesData"

function Meme() {

    // const [memeImage, setMemeImage] = useState("")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg}"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(meme)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input"></input>
                <input type="text" placeholder="Bottom text" className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>get a new meme</button>
            </div>
            <img src={meme.randomImage} className="main-image"></img>
        </main>
    )
}

export default Meme