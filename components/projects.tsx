import type React from "react"
import { SquareArrowOutUpRight } from "lucide-react"

interface ProjectProps {
  name: string
  url: string
}

const Project = ({ name, url }: ProjectProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link flex group items-center text-current hover:text-current transition-colors duration-200"
    >
      <span>{name}</span>
      <SquareArrowOutUpRight className="w-4 h-4 ml-1 transition-transform group-hover:rotate-45" />
    </a>
  )
}

export const Projects: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="heading" style={{ fontFamily: "var(--font-roboto-slab)" }}>
        Projects
      </h2>
      <ul className="space-y-2">
        <li className="flex flex-col items-start">
          <Project url="https://mindect.vercel.app" name="Mindect" />
          <Project url="https://pixxels.vercel.app/" name="Pixels" />
          <Project url="https://get-mail.vercel.app/" name="Get Mail" />
          <Project url="https://doubloons.vercel.app/" name="Doubloons" />
          <Project url="https://isa.theme-verse.com/" name="Image Scroll Animation" />
        </li>
      </ul>
    </section>
  )
}

