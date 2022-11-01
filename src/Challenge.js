/*
- Add a controlled form that includes:
     A text input
     A button with the text of “Click Me!”
     A paragraph that has a counter that starts at 0
-When they input text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length

-The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

*/

import React, { useState } from 'react'

export default function Challenge() {
    const [input,setInput] = useState()
    const [counter,setCounter] = useState(0)
    function handleCounter(event){
        event.preventDefault()
        setCounter(counter+1)

    }

  return (
    <form  onSubmit={handleCounter} >
    <input type="text" />
    <input type="submit" value={"Click me!"} />
    <p>{counter}</p>
    
    </form>
  )
}
