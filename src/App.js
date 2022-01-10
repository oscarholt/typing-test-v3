import React, { useState, useRef } from "react"
import './App.css'

const getCloud = () =>
  "oscar testing react nextjs macbook windows"
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1))

function Word(props) {
  const { text, active, correct } = props

  if (correct === true) {
    return <span className='correct'>{text} </span>
  }
  if (correct === false) {
    return <span className='incorrect'>{text} </span>
  }
  if(active){
    return <span className="active">{text} </span>
  }

  return <span>{text} </span>
}

function App() {
  const [userInput, setUserInput] = useState("")
  const cloud = useRef(getCloud())

  const [activeWordIndex, setActiveWordIndex] = useState(0)

  function processInput(value) {
    if (value.endsWith(" ")) {
      //user has finished with this word
      setActiveWordIndex((index) => index + 1)
      setUserInput("")
    } else {
      setUserInput(value)
    }
  }

  return (
    <div>
      <h1>Typing Test</h1>
      <p>
        {cloud.current.map((word, index) => {
          return (
            <Word
              text={word}
              active={index === activeWordIndex}
              correct={null}
            />
          )
        })}
      </p>
      <input
        type='text'
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  )
}

export default App
