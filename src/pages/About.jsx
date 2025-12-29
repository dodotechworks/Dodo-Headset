import React from 'react'

const About = () => {
  return (
    <section id='about' className='min-h-screen'>
    <div className='w-full min-h-screen flex flex-col justify-between'>
     <div className='pr-10 gap-4 flex flex-col pt-10 pl-10'>
      <h1 className='text-6xl md:text-7xl uppercase text-white oswald font-extrabold'>Why DODO Built This</h1>
      <h2 className='text-2xl md:text-4xl text-gray-400 oswald pl-5'>DODO creates digital experiences that feel smooth, modern, and intuitive.</h2>
     </div>
     <div className='pr-10 pb-25 pl-10'>
      <p className='text-2xl text-gray-100 oswald font-extralight'>This headphone is an extension of that idea — simple design, powerful performance, and no unnecessary noise.</p>
     </div>
    </div>
    </section>
  )
}

export default About