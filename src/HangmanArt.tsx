import React from 'react'
const Head = (<div style={{
  width:"50px",
  height:"50px",
  borderRadius:"100%",
  border: "solid black 10px",
  position:"absolute",
  right: "-30px",
  top: "50px"
}}></div>)
const Body = (<div style={{
  width:"10px",
  height:"100px",
  background:"black",
  position:"absolute",
  right: "0",
  top: "120px"
}}></div>)
const RightArm = (<div style={{
  width:"100px",
  height:"10px",
  background:"black",
  position:"absolute",
  right: "-100px",
  top: "150px",
  rotate:"-30deg",
  transformOrigin: "left bottom"
}}></div>)
const LeftArm = (<div style={{
  width:"100px",
  height:"10px",
  background:"black",
  position:"absolute",
  right: "10px",
  top: "150px",
  rotate: "30deg",
  transformOrigin: "right bottom"
}}></div>)
const RightLeg = (<div style={{
  width:"100px",
  height:"10px",
  background:"black",
  position:"absolute",
  right: "-90px",
  top: "210px",
  rotate: "60deg",
  transformOrigin: "left bottom"
}}></div>) 
const LeftLeg = (<div style={{
  width:"100px",
  height:"10px",
  background:"black",
  position:"absolute",
  right: "0 ",
  top: "210px",
  rotate: "-60deg",
  transformOrigin: "right bottom"
}}></div>) 
const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
type HangmanDrawingProps = {
  numberOfGuessedLetters : number;
}
function HangmanArt({numberOfGuessedLetters} : HangmanDrawingProps) {
  return (<>
    <div style={{position: "relative"}}>
    {bodyParts.slice(0, numberOfGuessedLetters)}
    <div style={{width:"10px", height:"50px", position:"absolute", background:"black", top:"0", right:"0"}} /> 
    <div style={{width:"200px", height:"10px", background:"black", marginLeft:"120px"}}/>
    <div style={{height:"400px", width:"10px", background:"black", marginLeft:"120px"}}/>
    <div style = {{height:"10px", width:"250px", background:"black"}}/>
    </div>
    </>
  )  
}

export default HangmanArt