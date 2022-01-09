import React, { useState, useRef } from "react"

const getCloud = () =>
  "oscar testing react nextjs macbook windows"
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1))

function App() {
  const [userInput, setUserInput] = useState("")
  const cloud = useRef(getCloud())

  
  return (
    <div>
      <h1>Typing Test</h1>
      <p>{cloud.current.toString()}</p>
      <input
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  )
}

export default App
