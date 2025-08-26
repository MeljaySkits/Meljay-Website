import React from 'react'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <footer className='bg-base-300 text-cyan-950 py-5'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-center md:text-left'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            <div className='flex gap-10 sm:mt-3'>
            <a
                  href="https://github.com/MeljaySkits"
                  className="text-gray-800 hover:text-gray-500 rounded-full glow"
                >
                  <FaGithub className="text-[30px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/meljay-malinao-a34687278"
                  className="text-gray-800 hover:text-gray-500  glow"
                >
                  <FaLinkedin className="text-[30px]" />
                </a>
                <a
                  href="https://www.instagram.com/zphyrs_23?igsh=NmEzY2IwcWVsc2tz"
                  className="text-gray-800 hover:text-gray-500 glow"
                >
                  <FaInstagramSquare className="text-[30px]" />
                </a>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer