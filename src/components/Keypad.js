// Code Keypad Component Here
import React from "react"

const Keypad = () => {
    const change = () => {
        console.log('Entering password...')
    }
      return <input type='password' onChange={change} />
}
export default Keypad