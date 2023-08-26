'use client'
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
  <div className="relative ">
    <div className="absolute w-full h-64 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20  "/>
 <Carousel 
 autoPlay
 infiniteLoop
 showStatus={false}
 showIndicators={false}
 showThumbs={false}
 interval={5000}
 className='cursor-pointer '
 >
    <div className=""><Image  loading='lazy' src="https://links.papareact.com/gi1"   width={800} height={0} alt="" /></div>
    <div className=""><Image  loading='lazy' src="https://links.papareact.com/6ff"  width={800} height={0}  alt="" /></div>
    <div className=""><Image  loading='lazy' src="https://links.papareact.com/7ma"  width={800} height={0} alt="" /></div>

 </Carousel>
  </div>
  )
}

export default Banner