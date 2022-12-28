import React from 'react'
import Image from 'next/image'
import Button from './Button'
function Landing() {
  return (
    <section className='sticky top-20 flex h-screen mx-auto max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block text-transparent bg-gradient-to-r from-pink-600 to-violet-500 bg-clip-text'>
                    Powered</span>
                <span className='block '> By Intellect</span>
                <span className='block '>Driven By Values</span>
            </h1>
            
            <div className='space-x-8'>
                <Button title='Buy Now' />
                
                <a className='link'>Learn More</a>
            </div>
        </div>
        <div className='relative hidden h-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]'>
            <Image src='/iphone.png' layout='fill' objectFit='contain' />
        </div>
    </section>
  )
}

export default Landing