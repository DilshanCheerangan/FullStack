// src/App.jsx
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'hello',
    'my name is dilshan!',
    'i am a software engineer.',
    'i study at university of colombo school of computing.',
    'i am a good man',
    'javascript is good programming language.',
    'the future is ai',
    'thank you for listening'
  ]

  const [selected, setSelected] = useState(0)

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
  )
}

export default App
