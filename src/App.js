import React, { useState, useRef } from "react"

const getCloud = () =>
  "oscar testing react nextjs macbook windows"
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1))

function App() {
  const [userInput, setUserInput] = useState("")
  const cloud = useRef(getCloud())

  const [activeWordIndex, setActiveWordIndex] = useState(0)

  return (
    <div>
      <h1>Typing Test</h1>
      <p>{cloud.current.map((word, index) => {
        if(index === activeWordIndex){
          return <b>{word} </b>
        }
        return <span>{word} </span>
      })}</p>
      <input
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  )
}

export default App
