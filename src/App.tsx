import Keyboard from "./Keyboard";
import Words from "./Words";
import HangmanArt from "./HangmanArt";
import {useCallback, useState, useEffect} from "react";
import words from "./assets/wordList.json";
function App() {
const [wordToGuess, setWordToGuess] = useState<string>(() => {
  return words[Math.floor(Math.random() * words.length)];
});
const [guessedLet, setGuessedLet] = useState<string[]>([]);
const reloadPage = () => window.location.reload()
const incorrectLetters = guessedLet.filter((letter) => !wordToGuess.includes(letter))
const hasLost = incorrectLetters.length > 5;
const hasWon =  wordToGuess.split("").every(letter => guessedLet.includes(letter))

console.log(wordToGuess,hasWon, wordToGuess.split(""))
const addGuessedLetter = useCallback((guess : string) => {
  if (guessedLet.includes(guess)|| hasWon || hasLost) return
  setGuessedLet(currentLetters => [...currentLetters, guess])
  console.log(guessedLet);
}, [guessedLet, hasWon, hasLost])



useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    const key = e.key;
    if (!key.match(/^[a-z]$/)) return;
    e.preventDefault();
    addGuessedLetter(key);

  }
  document.addEventListener("keypress", handler);
  return() => {
    document.removeEventListener("keypress", handler);
  }
}, [guessedLet])

console.log(wordToGuess);
  return (
   <div style = {{
     maxWidth: "800px",
     display: "flex",
     flexDirection: "column",
     gap: "2rem",
     margin: "0 auto",
     alignItems: "center"
   }}>  
  <div style = {{fontSize: "2rem", textAlign:"center"}}>
   {hasWon && "You won, refresh to try again"}
   {hasLost && "You lost, refresh to try again. The word was: "}
   {hasLost && wordToGuess}
  </div>
  {(hasWon || hasLost) && <button 
  style = {{fontFamily:"monospace", fontSize:"2rem"}} onClick = {reloadPage}> Play again</button>}
<HangmanArt numberOfGuessedLetters = {incorrectLetters.length}/>
<Words guessedLet = {guessedLet} wordToGuess = {wordToGuess}/>
<div style = {{alignSelf : "stretch"}}>
  <Keyboard activeLetters = {guessedLet.filter((letter) => {
    wordToGuess.includes(letter); 
  })} inactiveLetters = {incorrectLetters} addGuessedLetter = {addGuessedLetter } disabled = {hasLost || hasWon }/>
</div>
</div> 
  )
}

export default App
