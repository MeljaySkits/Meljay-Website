import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { GoCodeReview } from "react-icons/go"
import { Link } from "react-scroll"

function NavBars() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
<<<<<<< HEAD
      className="relative top-0 left-0 w-full z-20 bg-base-300"
=======
      className="fixed top-0 left-0 w-full z-20 bg-base-300  cursor-pointer"
>>>>>>> 3539222141b829c3dfd55f4f77294870ca93b2b0
      data-aos="fade-up"
      data-aos-delays="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <div className="flex ">
        <a href="/" className="text-4xl font-bold text-cyan-900 uppercase">
          dev.jay 
        </a>
        <GoCodeReview className="text-1xl text-cyan-950"/>
        </div>


        {/* Mobile Menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-cyan-900" />
        </button>

        {/* desktop navigation */}
        <nav className="hidden md:flex items-center space-x-7 ">
          <Link spy={true} smooth={true} to='/' className='font-semibold text-lg hover:text-secondary transition border-b-2 border-base-300 hover:border-primary cursor-pointer'>
    Home
    </Link>
    <Link spy={true} smooth={true} to='/about' name="/about" className='font-semibold text-lg hover:text-secondary transition border-b-2 border-base-300 hover:border-primary cursor-pointer'>
    About
    </Link>
    <Link spy={true} smooth={true} to='/skill' className='font-semibold text-lg hover:text-secondary transition border-b-2 border-base-300 hover:border-primary cursor-pointer'>
    Skill
    </Link>
    <Link spy={true} smooth={true} to='/contact' className='font-bold inline-flex border-2 py-2 px-6 focus:outline-none hover:text-white hover:bg-cyan-950 rounded-full text-lg'>
    Contact
    </Link> 
        </nav>
      </div>
       
       {/* mobile navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-cyan-950 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        {/* close button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile navigation */}

    <Link spy={true} smooth={true} to='/' className="text-lg text-white hover:text-gray-300 .active"
            onClick={() => setIsOpen(false)}>
    Home
    </Link>
    <Link spy={true} smooth={true} to='/about' className="text-lg text-white hover:text-gray-300 .active"
    onClick={() => setIsOpen(false)}>
    About
    </Link>
    <Link spy={true} smooth={true} to='/skill' className="text-lg text-white hover:text-gray-300 .active"
    onClick={() => setIsOpen(false)}>
    Skill
    </Link>
    <Link spy={true} smooth={true} to='/contact' className="text-lg text-white hover:text-gray-300 .active"
    onClick={() => setIsOpen(false)}>
    Contact
    </Link>
 

        {/* contact button
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"></button> */}


      </div>
    </div>
  )
}

export default NavBars
