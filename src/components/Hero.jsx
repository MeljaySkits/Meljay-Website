import React from 'react'
import herosection from '../images/herosection.jpg'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
          <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>       
        <main id='/' className='flex flex-col lg:text-start md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pt-32 p-24 lg:mt-25 md:mt-0 z-10 '>
            <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos='fade-up' data-aos-delay='500'>
                <div className='absolute -z-10 w-60 h-60 rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
                <header>
                    <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-black mb-4'>MELJAY MALINAO</h1>
                    <h2 className='text-xl sm:text-4xl md:text-2xl font-semibold mb-2'>Frontend <span className='text-cyan-950'>Developer</span></h2>
                </header>
                <p className='text-base sm:text-lg md:text-lg mb-6'> Hi, I'm  Meljay Malinao! A former IT Specialist and Network Administrator, I have switched to web development, with a passion to craft the web experiences of the future.</p>
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
            </section>
            <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0' ><img src={herosection} alt="Hero Image" className='h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-full border-2 img_glow'/></figure>
        </main>
    </div>
  )
}

export default Hero