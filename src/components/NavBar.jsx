import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const NavBarLinks = [
    { id: 1, name: "Home", link: "#home", },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skill", link: "#skills" }
  ]

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white bg-"
      data-aos="fade-up"
      data-aos-delays="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <Link to="/" className="text-4xl font-bold italic text-white uppercase">
          dev.jay
        </Link>

        {/* Mobile Menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/* desktop navigation */}
        <nav className="hidden md:flex items-center space-x-7 ">
          {NavBarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded-full text-lg">
            Contact
          </button>
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
        {NavBarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* contact button
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"></button> */}


      </div>
    </header>
  )
}

export default NavBar
