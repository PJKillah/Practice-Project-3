import React from "react";
import memedata from "../memeData";

export default function Meme() {

    let url

    function getMemeImage() {
        const memesArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        url = memesArray[randomNumber].url
        console.log(url)
    }

    return(
        <div className="meme">
            <p>{url}</p>
            <div className="input">
            <input className="input1" type="text" placeholder="Top text"/>
            <input className="input2" type="text" placeholder="Bottom text"/>
            <button 
            onClick={getMemeImage}
            className="btn--meme">
                Get a new meme image 🖼
            </button>
            </div>
        </div>
    )
}