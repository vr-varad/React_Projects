import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className='title'><h2>Our Tours</h2></div>
      <div className='underline'></div>
      {tours.map((tour)=><Tour key={tour.id} {...tour} removeTour={removeTour} />)}
    </section>
  )
}

export default Tours
