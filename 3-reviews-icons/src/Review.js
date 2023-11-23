import React, { useState } from 'react'
import people from './data'

const Review = () => {
  const [index,setIndex] = useState(0)

  const leftShift = ()=>{
    if(index>0){
      setIndex(prev=>prev-1)
    }
  }
  const rightShift = ()=>{
    if(index<people.length-1){
      setIndex(prev=>prev+1)
    }
  }
  const randomShift = ()=>{
    setIndex(Math.trunc(Math.random()*(people.length)))
  }

  const {name,job,image,text} = people[index]
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <i class="fa-solid fa-quote-right"></i>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={leftShift}><i class="fa-solid fa-arrow-left"></i></button>
      <button className='next-btn' onClick={rightShift}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
      <button className='random-btn' onClick={randomShift}>Suprise Me!</button>
  </article>
}

export default Review
