import React from 'react'
import Items from '../components/Items'

const Product = () => {
  return (
    <section id='product' className='min-h-screen'>
     <div className=''>
      <div className='pt-10 pl-10 flex flex-col gap-4'>
       <h1 className='text-white text-6xl oswald font-extrabold uppercase'>Choose your DODO</h1>
       <h2 className='text-gray-600 text-3xl oswald pl-5'>One product. Three expressions.</h2>
      </div>
      <div>
       <Items />
      </div>
      <div className='pl-10 pt-5 lg:pt-15'>
       <p className='text-gray-400 oswald font-extralight text-2xl'>Designed to match your style — without changing the experience.</p>
      </div>
     </div>

    </section>
  )
}

export default Product