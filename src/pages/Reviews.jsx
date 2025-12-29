import React from 'react'
import Card from '../components/Card'

const Reviews = () => {
  return (
    <section id='reviews' className='min-h-screen'>
     <div className='px-10 pt-10 flex flex-col gap-4'>
      <h1 className=' uppercase text-6xl text-white oswald font-extrabold'>What People Say About DODO ?</h1>
      <h2 className='text-gray-600 text-3xl oswald pl-5'>Real experiences from everyday listeners.</h2>
     </div>
     <div className='pt-10 lg:pt-25'>
      <Card />
     </div>
    </section>
  )
}

export default Reviews