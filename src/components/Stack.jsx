import skill from "../images/skill.png"
import Javascript from "../images/Javascript.png"
import React from "../images/React.png"
import Tailwind from "../images/Tailwind.png"
import Node from "../images/Node.png"
import Postgre from "../images/Postgre.png"

const skillsData = [
  {
    id: 1,
    image: Javascript,
    title: "Javascript",
    description:
      "JavaScript, often abbreviated as JS, is a high-level, versatile programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
  {
    id: 2,
    image: React,
    title: "ReactJs",
    description:
      "a free and open-source JavaScript library specifically designed for building user interfaces (UIs).",
  },
  {
    id: 3,
    image: Tailwind,
    title: "Tailwind Css",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom user interfaces rapidly.",
  },
  {
    id: 4,
    image: Node,
    title: "NodeJs",
    description:
      "an open-source, cross-platform JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser",
  },
  {
    id: 5,
    image: Postgre,
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads",
  },
]

const SkillsBox = ({ image, title, description }) => (
  <article className="bg-gray-200 hover:text-base-100 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-cyan-900 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 ">{title}</h3>
    </header>
    <p className="hover:text-base-100 text-sm sm:text-base">{description}</p>
  </article>
)

function Stack() {
  return (
    <>
      <section
        id="/skill"
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-10"
      >
        <img
          src={skill}
          alt="left-picture"
          className="absolute z-10 left-2 top-2 sm:left-50 sm:top-15 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
        />

        <div
          data-aos="fade-up"
          data-aos-delat="300"
          className="relative z-20 text-center space-y-6 sm:space-y-10"
        >
          <header>
            <h1 className="text-3xl sm:text-4xl text-black font-bold uppercase animate-pulse">
              My Tech-<span className="text-cyan-950">Stack</span>
            </h1>
            <p className=" mt-2 sm:mt-4 text-2xl sm:text-base">
              My current stack are JavaScript, React, Node.js, and PostgreSql,
              making me well-equipped to build modern, business-ready web
              applications.{" "}
            </p>
          </header>
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
          >
            {skillsData.map((skill) => (
              <SkillsBox
                key={skill.id}
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </section>
        </div>
        <img
          src={skill}
          alt="Right Picture"
          className="absolute z-10 right-2 top-2 sm:right-50 sm:top-15 transform rotate-12 w-24 h-auto sm:w-32 opacity-70 scale-x-[-1]"
        />
      </section>
    </>
  )
}

export default Stack
