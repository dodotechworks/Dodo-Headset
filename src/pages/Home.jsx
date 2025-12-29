import React from 'react'
import HeadphonesModel from '../components/HeadphonesModel'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex flex-col justify-between'>
     <div className=' w-1/2 pt-10 pl-10'>
      <h1 className='oswald font-extrabold text-white text-9xl uppercase'>DODO AUDIO</h1>
      <h2 className='text-gray-400 text-3xl oswald pl-5 pt-5'>Built by DODO. Designed to be heard.</h2>
     </div>
     <div className='pl-10 mb-25 flex flex-col gap-2'>
      <p className='text-2xl text-white satisfy'>Sound, Simplified by DODO</p>
      <p className='text-lg oswald text-gray-300 font-light'>We believe great sound shouldn’t be complicated.</p>
      <p className='text-regular oswald text-gray-100 font-extralight'>DODO headphones deliver clean audio, modern design, and everyday comfort — made for real life.</p>
     </div>
    </section>
  )
}

export default Home