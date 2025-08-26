import React from 'react'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'


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
<<<<<<< HEAD
                  className="text-gray-800 hover:text-gray-500  glow"
=======
                  className="text-gray-800 hover:text-gray-500 rounded-full glow"
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
                >
                  <FaLinkedin className="text-[30px]" />
                </a>
                <a
                  href="https://www.instagram.com/zphyrs_23?igsh=NmEzY2IwcWVsc2tz"
<<<<<<< HEAD
                  className="text-gray-800 hover:text-gray-500 glow"
=======
                  className="text-gray-800 hover:text-gray-500 rounded-full glow"
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
                >
                  <FaInstagramSquare className="text-[30px]" />
                </a>
            </div>
<<<<<<< HEAD
        </div>
    </footer>
    
=======

        </div>
    </footer>
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
  )
}

export default Footer