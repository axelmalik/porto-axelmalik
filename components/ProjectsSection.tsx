import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Cinetics",
    description:
      "Cinetics is a e-commerce that provide both physical and virtual movies that can be purchased in certain time.",
    image: "/cinetics.jpg",
    github: "https://github.com/axelmalik/Cinetics-Final",
    link: "",
  },
  {
    name: "Infokus",
    description: "Infokus is a website for managing student finances, aiming to make payments more efficient.",
    image: "/infokus.png",
    github: "",
    link: "",
  },
  {
    name: "Theatera",
    description:
      "Theatera is a website to book a seat for a theatre and designed to make the process easier and faster.",
    image: "/theatera.png",
    github: "",
    link: "",
  },
  {
    name: "Kontaku",
    description:
      "Kontaku is a mobile application designed to manage contacts and focuses on the simple and effective system.",
    image: "/kontaku.png",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-300 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                     
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
