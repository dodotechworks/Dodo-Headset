import React, { useEffect, useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Headphones () {
  const { scene } = useGLTF('/models/headphones.glb')
  const modelRef = useRef(null)

useEffect(() => {
  const model = modelRef.current
  if (!model) return

  gsap.fromTo(model.rotation,{y: 0.5}, {
    y: 2,
    immediateRender: false,
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'top 20%',
      scrub: 2,
      markers: false
    }
  })

  gsap.fromTo(model.rotation,{y: 2} ,{
    y: 3,
    immediateRender: false,
    scrollTrigger: {
      trigger: '#reviews',
      start: 'top bottom',
      end: 'top center',
      scrub: 2,
      markers: false
    }
  })
}, [])


  return (
    <primitive
     ref={modelRef} 
     object={scene}
     scale={9}
     position={[1, 0, 0]}
     rotation={[0, 0.5, 0]}
    />
  )
}

export default function HeadphonesModel() {
 return(
  <div className='w-full h-full'>
   <Canvas
    camera={{position: [0,0,5], fov: 45}}
   >
   {/* Lighting */}
   <ambientLight intensity={2} />
   <directionalLight position={[1, 1, 1]} intensity={20} />

   {/* Model */}
   <Headphones />

   {/* Controls */}
   <OrbitControls 
    enableZoom={false}
   />
   </Canvas>
  </div>
 )
}