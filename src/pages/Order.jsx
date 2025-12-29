import React from 'react'
import Form from '../components/Form'

const Order = () => {
  return (
    <section id='order' className='min-h-screen flex flex-col gap-20'>
     <div className='pt-10 px-10'>
      <h1 className='text-6xl text-white oswald font-extrabold uppercase'>Ready to Experience DODO?</h1>
      <h2></h2>
     </div>
     <div className='flex px-10'>
      <div>
       <Form />
      </div>
      <div>
       <div className='flex flex-col gap-10 px-10'>
        <p className='text-gray-400 oswald font-extralight text-4xl '>The same clean sound.</p>
        <p className='text-gray-400 oswald font-extralight text-3xl '>The same modern comfort.</p>
        <p className='text-gray-400 oswald font-extralight text-2xl '>Now it’s your turn to choose.</p>
       </div>
      </div>
     </div>
    </section>
  )
}

export default Order