import React from "react"
import chibiAbout from "../images/chibiAbout.jpg"
import Resume from "../files/Resume.pdf"
import { IoDocumentText } from "react-icons/io5"

function About() {
  return (
    <section
      id="/about"
      className=" min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 bg-slate-100"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <img
            src={chibiAbout}
            alt="about picture 1"
            width={290} height={290} className='rounded-3xl border-2 p-1 border-gray-800 img_glow'
          />
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <header>
            <h1 className="text-3xl text-cyan-950 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 uppercase">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
            Hello!👋  I'm Meljay Malinao, a web developer based in Cavite, Philippines , I'm a passionate and highly motivated self-taught developer with a strong foundation in modern web technologies. My journey into programming has been driven by curiosity and a hands-on approach, allowing me to quickly acquire and apply new skills to build functional and engaging web applications.
          </p>
          <a href={Resume} download='Resume' className="btn font-bold shadow-xl hover:shadow-gray-800/50 text-cyan-950 border-2 hover:bg-gray-500 border-cyan-950 py-4 px-8  uppercase hover:text-white hover:animate-pulse">
            <IoDocumentText /> Resume
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
