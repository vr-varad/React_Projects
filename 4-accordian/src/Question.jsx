// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Question = ({title,info}) => {
  const [sinfo,setsInfo] = useState(false)
  const showInfo = ()=>{
    setsInfo(prev=>!prev)
  }
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showInfo} ><i className={`fa-solid fa-${sinfo?'minus':'plus'}`}></i></button>
      </header>
      {sinfo && <p>{info}</p>}
    </article>
  )
}

export default Question
