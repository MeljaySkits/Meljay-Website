import React from 'react'
import herosection from '../images/herosection.jpg'
import codingemoji from '../images/codingemoji.png'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
          <div> 
        <main id='/' className='h-screen w-full'>
            <section className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ' data-aos='fade-up' data-aos-delay='500'>
                {/* <div className='absolute -z-10 w-60 h-60 rounded-full blur-3xl opacity-50 -top-5 -left-12'></div> */}
                    <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>Aspiring <span className='text-cyan-950'>Web Developer <img src={codingemoji} className='inline'/> </span></h2>
                <p className='text-base py-4 max-w-md'> Hi, I'm  Meljay Malinao! A former IT Specialist and Network Administrator, I have switched to web development, with a passion to craft the web experiences of the future.</p>
                <div className='flex items-center space-x-4 mb-6'>
                    <a
                  href="https://github.com/MeljaySkits"
                  className="text-gray-800 hover:text-gray-500 rounded-full glow p-2"
                >
                  <FaGithub className="text-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/meljay-malinao-a34687278/"
                  className="text-gray-800 hover:text-gray-500 rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href="https://www.instagram.com/zphyrs_23?igsh=NmEzY2IwcWVsc2tz"
                  className="text-gray-800 hover:text-gray-500 rounded-full glow p-2"
                >
                  <FaInstagramSquare className="text-[28px]" />
                </a>
                </div>
                </div>
                <div>
            <figure data-aos='fade-up' data-aos-delay='500' className='' ><img src={herosection} alt="Hero Image" className='rounded-full mx-auto border-2 img_glow sm:w-2/4 md:w-2xs lg:max-w-full'/></figure>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Hero


// className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'

// flex flex-col lg:text-start md:flex-col-reverse items-center justify-center w-full px-4 md:px-52 pb-4 md:pt-32 p-24 lg:mt-25 md:mt-0 z-10

// flex-1 mr-28 md:text-left mt-10 md:mt-0 relative
