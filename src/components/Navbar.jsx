import React from 'react'
import Media from './Media'
import Buy from './Buy'
import Menu from './Menu'

const Navbar = ({ lenis }) => {

  const scrollTo = (id) => {
    if (!lenis.current) return
    lenis.current.scrollTo(`#${id}`, {
      offset: 0,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
  }
  
  return (
    <section className='relative'>
     <div className="fixed top-0 right-0 text-gray-700 text-5xl pr-10 pt-10 bbh gap-4 flex flex-col items-end hidden lg:flex z-50">
      <h1 onClick={() => scrollTo('home')} className='cursor-pointer transition-colors duration-500 ease-in-out hover:text-white'>Home</h1>
      <h1 onClick={() => scrollTo('about')} className='cursor-pointer transition-colors duration-500 ease-in-out hover:text-white'>About</h1>
      <h1 onClick={() => scrollTo('product')} className='cursor-pointer transition-colors duration-500 ease-in-out hover:text-white'>Product</h1>
      <h1 onClick={() => scrollTo('reviews')} className='cursor-pointer transition-colors duration-500 ease-in-out hover:text-white'>Reviews</h1>
     </div>
     <div className='fixed top-0 right-0 z-50 pt-10 pr-10 lg:hidden pointer-events-auto'>
      <Menu lenis={lenis} />
     </div>
     <div className='z-30 pointer-events-auto fixed bottom-5'>
      <Media />
     </div>
     <div onClick={() => scrollTo('order')} className='z-30 fixed bottom-10 right-10 pointer-events-auto'>
      <Buy />
     </div>
    </section>
  )
}

export default Navbar