import React from "react";
import Troll from "../Images/Troll Face.png"

export default function Nav() {
    return(
        <nav className="nav">
            <img className="nav--logo" src={Troll} alt="" />
            <h1 className="nav--header">Meme Generator</h1>
            <h3 className="nav--header3">React Course - Project 3</h3>
        </nav>
    )
}