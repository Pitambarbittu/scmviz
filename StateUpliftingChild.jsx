import React from 'react'

const StateUpliftingChild = (props) => {

    const data ="Pitambar bhadra, I'm from Clild"
  return (
    <div>
        <h1>State Uplifting, sending Data Child component to Parent component</h1>
        <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default StateUpliftingChild