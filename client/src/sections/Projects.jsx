import React,  {useRef} from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projectContainerRef = useRef(null)

  useGSAP(() => {
    let mm = gsap.matchMedia()

    mm.add({
      isMobile: "(max-width: 639px)",
      isDesktop: "(min-width: 640px)"
    }, context => {
      let {isMobile, isDesktop} = context.conditions

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectContainerRef.current,
          start: "top bottom",
          end: "+=2000",
          pin: true,
          scrub: true
        }
      })
    })
  })
  return (
    <div ref={projectContainerRef} className='h-screen bg-amber-400'>Projects</div>
  )
}

export default Projects