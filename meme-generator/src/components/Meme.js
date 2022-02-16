import { React, useState } from "react"
import memesData from "../memesData"

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
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
    }

    function handleChange(event) {
        const {name, value} =     event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form-input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form-input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                <button 
                    className="form-button" 
                    onClick={getMemeImage}>get a new meme
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="main-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme