import React, { use, useEffect, useRef } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import HeadphonesModel from './components/HeadphonesModel'
import About from './pages/About'
import Product from './pages/Product'
import Reviews from './pages/Reviews'
import Order from './pages/Order'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const productRef = useRef(null)
  const reviewsRef = useRef(null)
  const orderRef = useRef(null)
  const lenisRef = useRef(null)

  useEffect(() => {

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,          // smoothness (0.05–0.1 sweet spot)
      wheelMultiplier: 1,
    })

    lenisRef.current = lenis

    // 2️⃣ Tell ScrollTrigger to update on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update)

    // 3️⃣ GSAP ticker drives Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    gsap.to(homeRef.current,{
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 2,
        markers: false
      }
    })
    gsap.to(aboutRef.current,{
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: productRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 2,
        markers: false
      }
    })
    gsap.to(productRef.current,{
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: reviewsRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 2,
        markers: false
      }
    })
    gsap.to(reviewsRef.current,{
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: orderRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: 2,
        markers: false
      }
    })   
    // 5️⃣ Cleanup (VERY important)
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
      gsap.ticker.remove(lenis.raf)
    }   
  },[])

  return (
    <div className='relative'>
      <div className='fixed z-[-1] w-full h-full'>
        <HeadphonesModel />
      </div>          
      <Navbar lenis={lenisRef} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={productRef}>
        <Product />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div ref={orderRef}>
        <Order />
      </div>
    </div>
  )
}

export default App