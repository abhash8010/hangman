import React from 'react'
type HangmanWordProps = {
     guessedLet : string[];
     wordToGuess : string;
}
function Words({guessedLet, wordToGuess} : HangmanWordProps) {
  return (
    <div style={{
        display: "flex",
        fontSize: "6rem",
        gap : ".25rem",
        fontWeight : "bold",
        textTransform :"uppercase",
        fontFamily: "monospace"
    }}>
    {
    wordToGuess.split("").map((letter, index) => {
        return <span style = {{borderBottom: "black .1em solid"}} key = {index}>
            <span style = {{visibility: guessedLet.includes(letter) ? "visible" : "hidden"}} > {letter} </span>
              </span>
    })
    }
    </div>
  )
}

export default Words