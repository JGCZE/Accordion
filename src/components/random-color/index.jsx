import { useState } from "react"
import "./styles.css"

const RandomColor = () => {
  const [bgColor, setBgColor] = useState('rgb(230, 30, 33)')
  

  const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 255)
    console.log(randomNumber);
    const newColor = (`rgb(${randomNumber} ${randomNumber} ${randomNumber})`)
    setBgColor(newColor)
    console.log(bgColor);
  }

  return (
    <div className='container' style={{ backgroundColor: bgColor }}>
      <button onClick={getRandomColor}>Generate random Color</button>
    </div>
  )
}

export default RandomColor