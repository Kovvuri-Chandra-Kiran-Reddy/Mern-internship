import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [colors, setColors] = useState(["Red", "Green", "Blue", "Violet", "Magenta", "Dodgerblue", "Default"]);
  const [isVisible, setVisibility] = useState(false);
  const [currColor, setCurrColor] = useState("grey")

  const handleClick = (e) => {
    setCurrColor(e.target.innerText);
    setVisibility(!isVisible)
  }

  const handlePicking = () => {
    setVisibility(!isVisible);
  }

  return (
    <>
      <div className="outer">
        <button value="Pick a Color" onClick={handlePicking} style={{ backgroundColor: currColor == "Default" ? "" : currColor }}> Pick a Color</button>
        <div className="colors-list">
          {!isVisible ? "" :
            colors.map((color) => {
              return <ul><li value={color} onClick={handleClick}> {color}</li></ul>
            })}
        </div>
      </div>
    </>
  )
}

export default App
