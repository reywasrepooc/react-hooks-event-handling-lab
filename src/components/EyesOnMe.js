// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {

    const eventFocus = () => { console.log('Good!') }
const eventBlur = () => { console.log('Hey! Eyes on me!') }

return <button onFocus={eventFocus} onBlur={eventBlur}>Eyes on me</button>
}

export default EyesOnMe