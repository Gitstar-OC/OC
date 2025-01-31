import { DappledLight } from "@/components/dappled-light"
import { Github, Twitter, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DappledLight />
      <main className="relative px-6 pt-24 mx-auto max-w-3xl z-10">
        <section className="mb-16 flex items-start gap-6">
          <Image
            src="https://github.com/gitstar-oc.png"
            alt="OC's GitHub profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">OC</h1>
            <p className="text-lg mb-4 font-geist">Design and AI Engineer</p>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-lg mb-4">
            Hello, I am{" "}
            <Link href="https://github.com/Gitstar-OC" className="underline">
              OC
            </Link>
            , a 17 year old teen and currently I am a <i>design</i> and <i>ai / machine</i> <i>engineer</i>. I love to
            make great websites, animations and automate things. I am also a member of{" "}
            <Link href="https://hackclub.com" className="underline">
              hackclub
            </Link>{" "}
            where I help in various <i>activities</i> including helping with ongoing events, organizing them and
            updating the source code.
          </p>
          <p className="text-lg mb-4">
            I am also {""}
            <span className="tooltip" data-tooltip="Participant in a lot of hackathons (40+)">
            a pro hackathon participator{" "}
            </span>{" "}
            both physical and online and I have won 5 hackathons till date with lot of great prices including both cash
            and non cash (credits etc.)
          </p>
          <p className="text-lg">
            Other than this I love contributing to open source and collaborating with new people.
            technology.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
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

        <footer className="py-8 flex gap-4 justify-end">
          <a
            href="https://x.com/IamnotOC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Gitstar-OC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github className="w-5 h-5" />
          </a>
        </footer>
      </main>
    </div>
  )
}

interface ProjectProps {
  name: string;
  url: string;
}

const Project = ({ name, url }: ProjectProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mono-link flex group items-center"
    >
      <span>{name}</span>
      <SquareArrowOutUpRight className="w-4 h-4 ml-1 transition-transform group-hover:rotate-45" />
    </a>
  );
};
