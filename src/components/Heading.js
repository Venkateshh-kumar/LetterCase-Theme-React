import React from 'react'

const heading = (props) => {
  return (
    <div>
      <h1 style={{color: props.mode==='dark'?'red':'black'}}> hello i am {props.name}</h1>
    </div>
  )
}

export default heading
