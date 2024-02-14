import { useState } from "react"
import "./styles.css"

const RandomColor = () => {
  const [colorType, setColorType] = useState('')
  const [bgColor, setBgColor] = useState('rgb(0, 0,0)')
  
  const randomNumber = () => {
    return Math.floor(Math.random() * 255)
  };

  const getRandomColor = () => {
    if(colorType == 'rgb') {
    const newColor = (`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`)
    setBgColor(newColor) 
    } 
    
    if (colorType == 'hex') {
      const newColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
      setBgColor(newColor)
    }
  }

  console.log(bgColor)
  console.log(colorType);

  return (
    <div className='container' style={{ 
      width: '300px',
      height: '150px',
      backgroundColor: bgColor
     }}>
      <button onClick={() => setColorType("hex")}>Create HEX</button>
      <button onClick={() => setColorType("rgb")}>Create RGB</button>
      <button onClick={getRandomColor}>Generate random Color</button>
      <p className="colorSection"> {bgColor} </p>
    </div>
  )
}

export default RandomColor;
